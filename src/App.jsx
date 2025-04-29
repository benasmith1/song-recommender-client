{/* Bena Smith 03/28/2025
  This file is the client of the ML pitch for the 222 Social App.
  It displays an ML algorithm that embeds user characteristics as vectors and includes an
  interactive plot, a form to find similar users to yourself, and a description of other ML algorithms that we can create
  */}

import { useState, useEffect } from "react";
import MemberForm from "./components/MemberForm";
import ProjectExplained from "./components/ProjectExplained";
import 'animate.css';

export default function App() {
  const [similarPeople, setSimilarPeople] = useState([]);
  const [suggestedEvents, setSuggestedEvents] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    console.log("Updated Similar People:", similarPeople);
  }, [similarPeople]); // Log when state updates

  return (
    <main className="bg-lime-100 min-h-screen flex flex-col bg-cover">
      <div className="relative w-full bg-contain bg-center bg-cover" style={{ backgroundImage: 'url(./header2.png)'}}>
        <div className="flex justify-center items-center h-[60vh]">
          <h1 className="text-5xl font-bold text-white">Algorithms That Know Your Sound</h1>
        </div>
      </div>


          <ProjectExplained />


      <div className="relative w-full bg-cover bg-center h-20" style={{ backgroundImage: 'url(./header2.png)' }}/>


      <div className="flex flex-col w-full min-h-screen bg-lime-950">
        <MemberForm setSimilarPeople={setSimilarPeople} setSuggestedEvents={setSuggestedEvents} setLoading={setLoading}/>

        <div className="bg-stone-600 p-6 text-white">
          
          {loading ? (
            <div className="flex flex-col justify-center items-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
              <h3 className="block text-xl font-bold mb-2 pt-10">Matching you with awesome people and experiences. Wait ~10 seconds</h3>
            </div>
          ) : (
            similarPeople.length > 0 ? (
              <ul className="list-disc pl-4 text-white animate__animated animate__fadeIn ">
                
              <h2 className="text-2xl font-bold mb-4 flex justify-center items-center ">Similar People</h2>

                {similarPeople.map((person, index) => (

                  <li key={index} className="text-slate-300 mb-4 animate__animated animate__fadeIn pl-10 list-none">
                    <div className="border-b border-gray-700 pb-4 flex flex-row">

                      <div className="w-3/5"> 
                        <b className="text-xl">{person.Name}</b>
                        <p>{person.About_Me}</p>
                      </div>
                      <div className="w-2/5 pl-10"> 
                        <p><b>Favorite Music Genres</b>: {person.Favorite_Music_Genres}</p>
                        <p><b>Religion</b>: {person.Religion}</p>
                        <p><b>Outgoing</b>: {["Very Introverted", "Introverted", "Neutral", "Outgoing", "Very Outgoing"][person.Outgoing - 1]}</p>
                        <p><b>Outdoorsy</b>: {["Never Outdoors", "Rarely Outdoors", "Sometimes Outdoors", "Often Outdoors", "Always Outdoors"][person.Outdoorsy - 1]}</p>
                        <p><b>Politically Correct</b>: {["Not at all", "Somewhat not", "Neutral", "Somewhat", "Very"][person.Politically_Correct - 1]}</p>
                        </div>
                      </div>
                  </li>
                ))}
                <h2 className="text-2xl font-bold text-slate-300 mb-4 mt-4 pt-10" dangerouslySetInnerHTML={{ __html: suggestedEvents }} />
              </ul>
            ) : (
              <h2 className="text-gray-400 text-2xl flex justify-center items-center">Fill out the form to find similar people and cool events!</h2>
            )
          )}
        </div>



      </div>
      <div className="" style={{ backgroundImage: 'url(./tree2.png)',
        backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh', }}>
        <div className="flex justify-center items-center h-[30vh]">
          <h1 className="text-5xl font-bold text-white">Other ML Ideas</h1>
        </div>
        <div className=" bg-lime-950 break-words whitespace-normal">
                <h2 className="text-3xl text-white pt-20 pl-20 pb-5">
                  Improving this algorithm
                </h2>
                <p className="text-slate-300 text-xl pl-20 pb-10 pr-20">To improve our people pairing algorithm we should do some research on what blend of personality types makes a good group. Right now, my algorithm suggests the most similar people. 
                But do opposites attract? Which traits are the most important to people that they share with their friends? Are some people using the app to find love while others want some buddies?  
                We can add dynamic weights that change based on how important certain traits are to some people in finding friends or relationships. This plus some domain research should lead to awesome pairings. </p>

                <h2 className="text-3xl text-white pl-20 pb-5">
                  Analyze user sentiments
                </h2>
                <p className="text-slate-300 text-xl pl-20 pb-3 pr-20"> We can search the web/ social media to find people talking about our app. 
                  We can analyze the sentiments of these webpages to see if users like the app. Then we can use OpenAI to extract popular phrases
                  in webpages to see what users like and what can be improved. </p>
                <p className="text-slate-300 text-xl pl-20 pb-3 pr-20">I created this algorithm and you can search for user sentiments about your app here: </p>
                <p className="text-slate-300 text-xl pl-20 pb-3 pr-20"><b> <a href="https://sentimentexplorer.streamlit.app/" target="_blank">Try my sentiment explorer! ↗</a></b></p>
                <p className="text-slate-300 text-xl pl-20 pb-10 pr-20">We can adapt this algorithm to monitor user likes and concerns in tweets, app store reviews, or summarize the satisfaction surveys users fill out after they take the comptibility survey.</p>

                <h2 className="text-3xl text-white pl-20 pb-5">
                  Fraud & spam detection
                </h2>
                <p className="text-slate-300 text-xl pl-20  pb-10 pr-20">To detect bots and malicious actors, we can use Clustering and Convolutional Neural Networks on user behavior in our app and responses to compatibility surveys.</p>

                <h2 className="text-3xl text-white pl-20 pb-5 pr-20">
                  Identify traits of popular events
                </h2>
                <p className="text-slate-300 text-xl pl-20 pl-20 pb-10 pr-20">Events held at 7pm may have statistically significantly higher attendance than those held at 6pm. 
                  We can find out using regression analysis. We will see if there are interactions between event traits that are associated with higher attendance and 
                  attendee satisfaction.
                </p>

                <h2 className="text-3xl text-white pl-20 pb-5">
                  Create Itineraries
                </h2>
                <p className="text-slate-300 text-xl pl-20 pl-20 pb-20 pr-20">We can use OpenAI's new deep research tool that can find restaurants with very specific requirements and create complex itineraries.</p>

        </div>
        <div className="" style={{ backgroundImage: 'url(./tree3.png)',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh', }}>          
        <div className="flex justify-center items-center h-[30vh]">
            <h1 className="text-5xl font-bold text-white">About Me</h1>
          </div>
          <div className="relative flex  bg-lime-950 ">
            <div className="flex  pt-20 items-start w-1/5">
              <img src={'./BenaSmithHeadshot.png'} alt="bena Headshot" className=" pl-20 pb-20 object-contain "/>;
            </div>
            <div className="flex flex-col justify-start text-left w-4/5">
              <h2 className="text-3xl text-white pl-20 pt-20 pb-5">
                  Nice to meet you!
              </h2>
                <p className="text-slate-300 text-xl pl-20 pl-20 pb-20 pr-20 break-words whitespace-normal">
                  My name is Bena. I am from Denver, Colorado. I recently moved to New York City. I enjoy DJing, running, 
                  skateboarding, doodling, meeting new people, the outdoors, and machine learning! I enjoy automating and streamlining systems with data
                  algorithms. <br/> <br/>

                  At Gallo Winery, I created a LangChain AI agent to ask questions about Gallo’s wine sales in plain language. The agent writes SQL code and 
                  queries the sales database to return an answer. Prior to this project, salespeople were sifting through large datasets and planning their own sales strategies.
                  Now, I've implemented an automated messaging system that sends weekly Microsoft Teams messages with AI-generated optimal strategies. <br/> <br/> 
                  During my B.S. in Statistics and Data Science with minors in Computer Science and Biology at the University of Arizona, I won the highest 
                  award at the American Statistical Association Datafest. I created a Natural Language Processing-based search engine for lawyers in the 
                  American Bar Association to find cases in their domain. I also performed sentiment analysis on client and lawyer messages. This was when 
                  I truly began to understand the power of data in improving automated processes and how much I loved creating data algorithms. <br/> <br/> 
                  As a full-stack web developer at the Eliot Litz Consulting Firm, I coded with React, C#, and SQL to create a home design management website.
                  At BrightBean Labs, I developed a genetic algorithm to optimize delivery routes and built Power BI dashboards for supply chain management. <br/> <br/> 
                  Seeking a deeper understanding of the theory behind data modeling, I completed an M.S. in Statistics at Cal Poly. I am skilled in time series  
                  analysis, generalized linear models, stochastic modeling, Bayesian statistics, and statistical consulting. I continue to round-out my data science  
                  toolkit with Coursera and DataCamp courses including: Neural Networks and Deep Learning Certificate (Andrew Ng/ DeepLearning.AI), Tableau, 
                  SQL, Supervised Learning with Scikit-learn, Deep Learning with PyTorch, and Reinforcement Learning. <br/><br/> 

                  <a href="https://bena-smith.com" target="_blank">View my portfolio↗</a><br/><br/>

                  Let's create! </p>
                  
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
