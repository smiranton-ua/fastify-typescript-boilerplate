class Util {
  public static convertArrayToHash(
    list: object[],
    propName: string,
    isPropValueArray: boolean = false
  ) {
    return list.reduce((acc, item) => {
      if (isPropValueArray) {
        if (acc[item[propName]]) {
          acc[item[propName]].push(item);
        } else {
          acc[item[propName]] = [item];
        }
      } else {
        acc[item[propName]] = item;
      }

      return acc;
    }, {});
  }
}

export default Util;
