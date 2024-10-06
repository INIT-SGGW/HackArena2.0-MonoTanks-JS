const { Agent, MoveDirection, Rotation, Log } = require("../agent");

class MyAgent extends Agent {
    on_lobby_data_received(lobbyData) {
        Log.info("Lobby data received");
    }

    on_game_start() {
        Log.info("Game started");
    }

    next_move(gameState) {
        const random = Math.random();

        const randomRotation = () => {
            if (Math.random() < 0.33) {
                return Rotation.Left;
            } else if (Math.random() < 0.66) {
                return Rotation.Right;
            }
            return null;
        }

        if (random < 0.33) {
            return this.rotateTank(randomRotation(), randomRotation());
        }

        if (random < 0.66) {
            const direction = Math.random() < 0.5 ? MoveDirection.Forward : MoveDirection.Backward;
            return this.moveTank(direction);
        }

        return this.shoot();
    }

    on_game_end(results) {
        throw new Error("Method not implemented.");
    }
}

new MyAgent();