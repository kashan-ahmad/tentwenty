export type BoolBacks<T = any> = {
  onSuccess: (data: T) => unknown;
  onFailure: (message: string) => unknown;
};

export type RequestState = "loading" | "loaded" | "erred";
