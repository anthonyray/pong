function Paddle()
{
	Entity.call(this);
	this.width = 20;
	this.height = 100;
	this.score = 0;
};

Paddle.prototype  = Object.create(Entity.prototype);
Paddle.prototype.constructor = Paddle;

Paddle.prototype.update = function() {
	Entity.prototype.update.apply(this,arguments);
	this.y = Math.min(Math.max(0,this.y),game.height - this.height);

}

function Player()
{
	Paddle.call(this);
	this.y = game.height / 2 - this.height/2
	this.x = 20;


}

Player.prototype = Object.create(Paddle.prototype);
Player.prototype.constructor = Player;
Player.prototype.update = function() {
	Paddle.prototype.update.apply(this,arguments);

	var speed = 12;
	if (game.keyPressed.up){
		this.yVelocity = -speed;
	}
	else if(game.keyPressed.down){
		this.yVelocity = speed;
	} else {
		this.yVelocity = 0;
	}

}

function Bot(){
	Paddle.call(this);

	this.x = game.width - this.width - 20;
}

Bot.prototype = Object.create(Paddle.prototype);
Bot.prototype.constructor = Bot;

Bot.prototype.update = function(){
	var speed = 5;
	if (this.y < game.ball.y){
		this.yVelocity  = speed;
	}
	else if (this.y > game.ball.y){
		this.yVelocity  = -speed;
	}

	Paddle.prototype.update.apply(this,arguments);
}

