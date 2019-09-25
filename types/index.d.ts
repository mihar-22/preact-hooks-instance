declare function useInstance<T>(value: T): T extends (...args: any) => any ? ReturnType<T> : T;

export as namespace useInstance;
export default useInstance;
