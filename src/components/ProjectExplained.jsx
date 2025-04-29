{/* Bena Smith 03/28/2025
  This file returns html that shows a plotly plot of KNN on users and a description of how I carried out the project.
  */}
  
import React from 'react'


const ProjectExplained = () => { 
    return (
        <div className=" flex justify-center relative flex-col  bg-lime-950  items-center">

            <div className="w-full flex justify-center items-center flex-col">
                <h3 className="text-slate-300 text-lg pb-5 flex justify-center items-center pt-10"> 
                    <b> Click around on the graph to explore people and groups. Double-click on a group in the legend to isolate it</b><br/><br/>
                </h3>

                <div className="w-full flex justify-center">
                    <embed 
                        src="/playlist_plot.html" 
                        width="80%"  // Adjust width to fit better
                        height="600px"
                        title="Group Plot"
                        className="block mx-auto max-w-full flex justify-center items-center block w-[1000px] clear-both"
                    />
                </div>

            </div>
            <div className="flex-col justify-start text-left ">
                <h1 className="text-3xl text-white">
                Procedure
                </h1>
                <h3 className="text-slate-300 text-lg pl-15 pr-7 pb-7 text-lg pl-4 pr-3 pb-5 break-words whitespace-normal"> 

                    <b>1. Create 300 simulated profiles of app users </b> with an "About Me," favorite music genres, religion, <br/>
                    and 1-5 ranks of outgoingness, outdoorsiness, and polictical correctness. ChatGPT created these profiles <br/>
                    so a lot of these simulated people have similar bios. With more intense prompting, we can get more unique<br/>
                    test profiles. Real users are more creative! <br/><br/>
                    

                    <b>2. Create sentence embeddings </b> of each person's characteristics using Open AI. These embeddings<br/>
                    are vectors that are closer together when the sentences are more similar. For example, if someone is<br/>
                    outgoing and likes EDM, their embedding will be very similar to somone who describes themself as an <br/>
                    extrovert who likes electronic music and far from an introvert who likes classical music. <br/><br/>
                    I created weights for each trait (favorite music, religion, etc) and found a weighted average of the <br/>
                    returned embeddings. With some research, we can decide which common traits are most important <br/>
                    that friends have in common or use this algorithm to weight 222 user "parameters" when users decide <br/>
                    what traits they value the most.<br/><br/>

                    <b>3. Make groups </b>using K Nearest Neighbors based on the closeness of the vector embeddings. Using<br/>
                    principal component analysis, the vector embeddings are reduced to 2 dimensions to view the graph <br/>
                    in 2D. I made 10 groups of people. We can plan an event for each group!<br/><br/>

                    This app was created with React and Flask/ Python. Code can be found here: <br/>
                    <b><a href="https://github.com/benasmith1/pair-recommender" target="_blank">React Client↗</a> </b><br/>
                    <b><a href="https://github.com/benasmith1/server-pair-recommender" target="_blank">Flask Backend↗</a></b><br/><br/>


                    <b>Below, you can create a profile and users with similar vector embeddings/traits are recommended <br/>
                    along with some events that we want to plan for you ↓ </b>

                </h3>

            </div>

        </div>

      );
    };
  
  export default ProjectExplained