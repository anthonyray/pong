function Ball(){
	Entity.call(this);

	this.width = 20;
	this.height = 20;

	this.x = game.width / 2 - this.width;
	this.y = game.height /2 - this.height;

	this.yVelocity = 10;
	this.xVelocity = 5;

}

Ball.prototype = Object.create(Entity.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.reset = function(){
	this.x = game.width / 2 - this.width;
	this.y = game.height /2 - this.height;

	var min = -5, max = 5;
	this.yVelocity = Math.floor(Math.random() * (max - min + 1) + min);
	this.xVelocity = Math.random() > 0.5 ? 5 : -5;
}

Ball.prototype.update = function() {
	Entity.prototype.update.apply(this,arguments)

	if(this.y > game.height - this.height || this.y < 0){
		this.yVelocity *=-1 ;
	}

	if(this.x > game.width){
		game.player.score += 1;
		this.reset();
	}

	if (this.x < 0){
		this.reset();
		game.bot.score += 1 ;
	}

	if (this.intersect(game.bot)){
		var hitter = game.bot
	}
	else if (this.intersect(game.player)){
		var hitter = game.player
	}

	if (hitter){
		this.xVelocity *= -1.1 ;
		this.yVelocity *= -1.1 ;

		this.yVelocity += hitter.yVelocity / 2 ; 

	}
}