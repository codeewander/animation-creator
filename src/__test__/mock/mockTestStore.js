import { store } from "../../index";

export const makeTestStore = () => {
    const origDispatch = store.dispatch;
    store.dispatch = jest.fn(origDispatch);
    return store;
};
