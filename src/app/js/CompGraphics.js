import React from 'react';
import '../css/Project.css';
import $ from 'jquery';
import ScrollToTopOnMount from './ScrollToTopOnMount';

function CompGraphics() {
    return(
      <div>
        <ScrollToTopOnMount />
        <div class="projPic headerColor">
          <h4 class='projHeader'>Computer Graphics Series</h4>
        </div>
        <div class="projBg color">
          <div class="projContent">
            <img class="banner" src="./Projects/ComputerGraphics/WalkerBanner.png"></img>
            <h4 class='sectionHeader'>Overview</h4>
            <p class='feats'> In this series I applied concepts and algorithms to create, analyze, display, and animate shapes and structures and let the user design or control them interactively.</p>
            <br/>
            <br/>
            <p class='feats'>The series began by implementing  a cubic Neville and a Bezier curve and applying an animation of dots moving along the curve with uniform, centripetal, and chordal knot spacing.
               The next feature I implemented was a circular arc implementation to visualize a Bezier curve rather than using a linear interpolation. If the user presses “e,” they can toggle the line segments used in finding
                  the radius and center coordinates. I then created a way to visualize how the Bezier curve gets constructed through the underlying liner interpolation function. It shows how the Bezier curve is a series of straight
             lines rather than a smooth curve. Also shown by this view are the intermediate curves created by the Bezier curve between ABC and BCD. These curves get combined to create the final Bezier curve.
            </p>
            <br/>
            <br/>
            <div class="imgContainer">
              <img class="image2" src="./Projects/ComputerGraphics/cg0.png"></img>
              <img class="image2" src="./Projects/ComputerGraphics/cg1.png"></img>
              <img class="image2" src="./Projects/ComputerGraphics/cg2.png"></img>
              <img class="image2" src="./Projects/ComputerGraphics/cg3.png"></img>
            </div>
            <br/>
            <br/>
            <p class='feats'>
            In the next part of this series, I created a runner that followed a path that could be manipulated by the user. I first found the acceleration vector between the subdivision points
             of some control points. Next, I used the acceleration vectors to generate a curve along the floor. I used this as my footpath. To make the feet move, I counted the frames and moved the
              feet in cycles of 18 frames. I made legs with knees and calculated the knee points by using the foot location, forward direction, and hip location. I added a multiplier to the knee
               to vary how much it bends while it is moving. This was to make the walking animation appear more natural. I added hips that tilt based on the cross product of the acceleration vector and forward direction.
                I used a similar method to calculate the shoulders, as well as to add bending arms. The feet move up and down as the runner is taking steps.
            </p>
            <br/>
            <br/>
            <img class="image1" src="./Projects/ComputerGraphics/walker.gif"></img>
            <br/>
            <br/>
            <p class='feats'>
            To finish off the series I explored applications of triangle meshes to collision avoidance, path planning, visibility analysis, and ray tracing. To begin, I first got the Robot and the
             pillars to appear. I then made a RobotTarget point. This started off as the same point as the Robot. When the Robot reaches the RobotTarget a new center point is chosen to be the new
              RobotTarget. As the Robot moves I change its height and radius such that the Robot maintains the same volume while traversing through the pillars. In the next step, I made the Robot
               “clean the floor” by writing an algorithm that makes sure the Robot travels to all of the triangles within the mesh. In this algorithm, the distances to all of the circumcenters were
                checked and the Robot chose the closest uncleaned circumcenter as its new RobotTarget.
            </p>
            <br/>
            <br/>
            <div class="imgContainer">
              <img class="image3" src="./Projects/ComputerGraphics/cg.3.0.gif"></img>
              <img class="image3" src="./Projects/ComputerGraphics/cg.3.1.gif"></img>
            </div>
            <h4 class='sectionHeader'>Features/Tech Used</h4>
            <p class='feats'>Programming and graphics were done in <div className='emphasize'>Processing</div>, an open-source graphical library and IDE. Graphics interfaces such as <div className='emphasize'>OpenGL </div> 
            and <div className='emphasize'>shaders</div> were used. The source code can be found in the following repositories: <a href="https://github.com/cconnelly7/Graphics-Part1" target="_blank">part 1</a>, <a href="https://github.com/cconnelly7/Graphics-Part2" target="_blank">part 2</a>, and <a href="https://github.com/cconnelly7/Graphics-Part3" target="_blank">part 3</a>
            </p>
            <div class='extraSpace'></div>
          </div>
        </div>
      </div>
    )
}

export default CompGraphics;