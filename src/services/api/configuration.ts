const val = "REACT_APP";

export class Configuration {
  proc = process.env ?? {};

  static isDebug() {
    return (process.env ?? {})["REACT_APP_DEBUG"]?.toUpperCase() === "TRUE";
  }

  static isLocal() {
    return (process.env ?? {})["REACT_APP_LOCAL"]?.toUpperCase() === "TRUE";
  }

  GetConfig(key: string) {
    const fullkey = `${val}_${key.toUpperCase()}`;

    if (this.proc[fullkey]) {
      return this.proc[fullkey];
    }

    return undefined;
  }
}
