Often when approaching a problem like this, people start by trying to grasp the whole problem at once, and end up building an inflexible plan. It’s often better to plan as you go, so long as you have a guiding principle. Here’s an example of this, with the guiding principle of “start with the smallest, simplest constituent part, and build it up from there.”


In the game of bowling, the smallest part is either a single roll or a single frame. We could create a Roll class, but seeing as the only data it would have would be the number of pins it knocked down, we can probably just use a number instead. Frame is probably a better bet, so start there.


When thinking about what needs to go into a Frame class, we should start simple again, just a single frame on its own. What can you tell from a single frame of bowling? Other than the rolls, the things that come to mind for me are that a single frame knows whether or not a strike was scored, and whether or not a spare was scored, so these could be good methods to add to this class.
After this, make a bowling game which is just two frames. You’ll need a Game or Scorecard class to keep track of the multiple frames. The scorecard should allow you to enter a roll, and it should work out which Frame to add that roll to.
It also needs to be able to calculate a total score from all the frames in the game. Ignore bonuses at first.


Once you’ve got a scorecard working with two frames, try implementing the strike/spare bonuses, ignoring the final frame complexity. When the scorecard calculates the total score, there needs to be some way to calculate any bonuses from strikes and spares. Think about whether this responsibility lies with the Frame class or the Scorecard class. If you put it in the frame class, what extra information would need to be provided so that the frame class could work it out?
In this way, you build the solution up slowly, piece by piece. When you get to the step of implementing the final frame logic, if your Frame class and Scorecard class are simple enough, this problem will be easier to tackle.