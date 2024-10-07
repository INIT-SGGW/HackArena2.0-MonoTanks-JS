# HackArena 2.0 - JavaScript framework

This JavaScript Websocket client was created for Hackarena 2.0, organized by Koło Naukowe "init" from SGGW in Warsaw. It serves as a framework for participants to create agents that can play the game.

To fully test and run the game, you will also need the game server and GUI client, as the GUI provides a visual representation of gameplay. You can find more information about the server and GUI client in the following repository:

[Server and GUI Client Repository](https://github.com/INIT-SGGW/HackArena2024H2-Game)

## CLI arguments

There are several arguments you can pass when launching the program:

- `-n, --nickname <nickname>`: Nickname of the agent. This argument is required and has to be unique in game environment.
- `-h, --host <host>`: Host to connect to. Defaults to `localhost`.
- `-p, --port <port>`: Port to connect to. Defaults to `5000`.
- `-c, --code <code>`: Code for joining a specific lobby.
- `-q, --quick-join:` Start the game the moment the agent connects to the server.

> **Note**
>
> If you're using npm sripts to run the program, use `--` before declaring arguments for them to be passed to the command
>
> ```bash
> npm start -- -p 1234
> ```

> **Note**
>
> Prefered way to set flags is to include them in the [start](./package.json#L7) script declaration > in package.json file. This way you can run the client with the flags by simply > running `npm start`.
>
> ```json
> "scripts": {
>    "start": "node dist/index.js -n <nickname> -h <host> -p <port> -c <code> -q"
> }
> ```

## Using delay option

This option will delay the sending of messages to the server by the specified amount of milliseconds. This can be useful for testing how your agent behaves if computation takes a certain amount of time. To use this option, you need to use delay setter in Agent class. The value of this key can be either a number or an array of two numbers. If it is a number, it will delay every message by that amount of milliseconds. If it is an array, it will delay every message by a random amount of milliseconds between the two numbers in the array.

```typescript
const agent = new Bot();
agent.delay = 1000; // delays every message by 1000ms
agent.delay = [500, 1000]; // delays every message by a random amount of milliseconds between 500 and 1000
```

## Running the client

### 1. Running locally

To run the client locally, you will need

- [git](https://git-scm.com/downloads) to clone the repository
- [Node.js](https://nodejs.org/) version `>=18.x.x` to run the client
- npm to install dependencies and run the client (npm is included with Node.js)

After installing git, Node.js and npm, you can run the following commands in the project directory:

To clone the respotory:

```bash
git clone https://github.com/INIT-SGGW/HackArena2024H2-JS.git
```

To install dependencies:

```bash
npm install
```

To run the client:

```bash
npm start -- -n <nickname>
```
