// Type definitions for Preact Hooks - Instance
// Project: https://github.com/mihar-22/preact-hooks-instance
// Definitions by: Rahim Alwer <https://github.com/mihar-22>

declare function useInstance<T>(value: T): T extends (...args: any) => any ? ReturnType<T> : T;

export as namespace useInstance;
export default useInstance;
