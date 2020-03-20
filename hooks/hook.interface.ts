import { HookTypesInterface } from "../constants/hookTypes";

interface HookInterface { type: keyof HookTypesInterface, handler: (req, res, done) => void }

export default HookInterface;
