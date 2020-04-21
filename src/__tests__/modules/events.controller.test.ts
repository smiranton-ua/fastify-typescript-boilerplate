import { MongoMemoryServer } from 'mongodb-memory-server';
import { FastifyInstance } from 'fastify';
import { omit } from 'lodash';

import { createServer } from '../../server';

import { ConfigService } from '../../modules/config';
import {
  SearchEventInterface,
  EventInterface,
  EVENT_SEARCH_MODEL,
  EVENT_MODEL
} from '../../modules/events';

import * as EVENTS from '../dummy/events';
import { API } from '../../constants';

describe('Events endpoints', () => {
  const mongoConfig = ConfigService.getMongoConfig;
  const mongod = new MongoMemoryServer({ instance: { dbName: mongoConfig.database } });

  let server: FastifyInstance;

  beforeAll(async () => {
    const url = await mongod.getUri();

    server = await createServer({
      swaggerConfig: ConfigService.getSwaggerConfig,
      fastifyConfig: {},
      mongoConfig: { url },
      statsConfig: ConfigService.getStatisticsConfig
    });

    await server.ready();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(async () => {
    await mongod.stop();
    await server.close();
  });

  describe('Get event by id', () => {
    const eventIdUrl = `${API.PREFIX.EVENTS}/`;

    it('It should fail because of empty id param', async (done) => {
      const response = await server.inject({
        method: API.METHOD.get,
        url: eventIdUrl
      });
      expect(response.statusCode).toEqual(400);
      done();
    });

    it('It should fail because we have empty collection by default', async (done) => {
      const response = await server.inject({
        method: API.METHOD.get,
        url: `${eventIdUrl}${EVENTS.EVENT_1._id}`
      });
      expect(response.statusCode).toEqual(404);
      done();
    });

    it('It should insert dummy event into events collection', async (done) => {
      await server.eventsService.bulkCreate([EVENTS.EVENT_1]);
      done();
    });

    it('It should return event by id and pass dto model schema', async (done) => {
      const response = await server.inject({
        method: API.METHOD.get,
        url: `${eventIdUrl}${EVENTS.EVENT_1._id}`
      });

      const { data } = response.json() as { data: EventInterface };

      expect(response.statusCode).toEqual(200);
      expect(Object.keys(data).length).toBeGreaterThan(0);

      Object.keys(omit(EVENT_MODEL, ['Selections', 'Markets'])).forEach((key: string) => {
        expect(JSON.stringify(data[key])).toEqual(JSON.stringify(EVENTS.EVENT_1[key]));
      });

      done();
    });

    it('It should reset collection', async (done) => {
      await server.eventsService.remove();
      done();
    });

    it('It should fail because all items have been removed', async (done) => {
      const response = await server.inject({
        method: API.METHOD.get,
        url: `${eventIdUrl}${EVENTS.EVENT_1._id}`
      });
      expect(response.statusCode).toEqual(404);
      done();
    });
  });

  describe('Search events', () => {
    const searchUrl = `${API.PREFIX.EVENTS}/search/`;

    it('It should fail because of empty search param', async (done) => {
      const response = await server.inject({ method: API.METHOD.get, url: searchUrl });
      expect(response.statusCode).toEqual(400);
      done();
    });

    it('It should pass because we have empty collection by default', async (done) => {
      const response = await server.inject({
        method: API.METHOD.get,
        url: `${searchUrl}EventName`
      });
      const responseJSON = response.json() as { data: Array<SearchEventInterface> };

      expect(response.statusCode).toEqual(200);
      expect(responseJSON.data.length).toEqual(0);
      done();
    });

    it('It should insert dummy event into events collection', async (done) => {
      await server.eventsService.bulkCreate([EVENTS.EVENT_1]);
      done();
    });

    it('It should pass searching with param "EventName"', async (done) => {
      const response = await server.inject({
        method: API.METHOD.get,
        url: `${searchUrl}${EVENTS.EVENT_1.EventName}`
      });
      const { data } = response.json() as { data: Array<SearchEventInterface> };

      expect(response.statusCode).toEqual(200);
      expect(data.length).toBeGreaterThan(0);

      Object.keys(EVENT_SEARCH_MODEL).forEach((key: string) => {
        expect(JSON.stringify(data[0][key])).toEqual(JSON.stringify(EVENTS.EVENT_1[key]));
      });

      done();
    });

    it('It should pass searching with param "Test"', async (done) => {
      const response = await server.inject({
        method: API.METHOD.get,
        url: `${searchUrl}Test`
      });
      const responseJSON = response.json() as { data: Array<SearchEventInterface> };

      expect(response.statusCode).toEqual(200);
      expect(responseJSON.data.length).toEqual(0);
      done();
    });

    it('It should reset collection', async (done) => {
      await server.eventsService.remove();
      done();
    });
  });
});
