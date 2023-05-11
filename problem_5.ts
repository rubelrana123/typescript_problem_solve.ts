function Message(message: unknown): void {
    if (message === "string") {
      console.log("message");
    } else {
      console.error("message is not string");
    }
  }
  Message("message");