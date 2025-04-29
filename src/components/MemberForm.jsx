{/* Bena Smith 03/28/2025
  This file contains the form that new members fill out to get similar members. 
  */}
  
import { useState } from "react";
import PersonalitySliders from "./PersonalitySliders"; // Import the slider component

export default function MemberForm({ setSimilarPeople, setSuggestedEvents, setLoading}) {

    const [formData, setFormData] = useState({
        Name: "",
        About_Me: "(Click to edit) I love meeting new people and am creative and analytical. I enjoy skateboarding, dancing, and running. I love my work as a data scientist. I like board games, puzzles, fishing, and walking around.",
        Outgoing: 2,
        Outdoorsy: 2,
        Religion: "Other",
        Politically_Correct: 2,
        Favorite_Music_Genres: []
    });

    const genres = [
    "Classical", "Folk", "Indie", "Pop", "Rock", "Rap", "Hip-hop",
    "Metal", "Blues", "Electronic", "Jazz", "Country"
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGenreChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => {
            if (checked) {
            return { ...prev, Favorite_Music_Genres: [...prev.Favorite_Music_Genres, value] };
            } else {
            return { ...prev, Favorite_Music_Genres: prev.Favorite_Music_Genres.filter((genre) => genre !== value) };
            }
        });
    };

    const handleSubmit = async (e) =>{
        setLoading(true);
        e.preventDefault();
        console.log(formData); 
        try {
            const response = await fetch('https://pair-recommender-service-6oqt6.ondigitalocean.app/api/submit_form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            });

            if (response.ok) {
            const data = await response.json();
            console.log('Response:', data);
            console.log('Similar People:', data.similar_people);
            console.log('Event Suggestions:', data.event_suggestions);


            if (data.similar_people) {
                setSimilarPeople(data.similar_people); 
                setSuggestedEvents(data.event_suggestions)
            } else {
                console.warn("No similar_people key found in response");
            }

            } else {
            console.log('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form bg-lime-950 p-6 rounded-lg shadow-lg w-1/2 mx-auto my-8">
            <h1 className="text-3xl font-bold text-white mt-4">
            Find <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">Experiences</span> You'll Love
            </h1>

            <div className="form-group text-white">
            <label htmlFor="Name" className="block text-xl font-bold mb-2">Name:</label>
            <input
                type="text"
                id="Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
                className="w-full p-3 mb-4 bg-white text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <label htmlFor="About_Me" className="block text-xl font-bold mb-2">About Me:</label>
            <textarea
                id="About_Me"
                name="About_Me"
                value={formData.About_Me}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 mb-4 bg-white text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <br/>

            <label className="block text-xl font-bold mb-2">Favorite Music Genres:</label>
            <div className="grid grid-cols-2 gap-4 mb-4">
                {genres.map((genre) => (
                <label key={genre} className="flex items-center space-x-2">
                    <input
                    type="checkbox"
                    name="genres"
                    value={genre}
                    checked={formData.Favorite_Music_Genres.includes(genre)}
                    onChange={handleGenreChange}
                    className="h-5 w-5 text-yellow-500 focus:ring-0"
                    />
                    <span className="text-white">{genre}</span>
                </label>
                ))}
            </div>

            <br/>

            <label htmlFor="Religion" className="text-xl font-bold mb-2">Religion</label>
            <select
                id="Religion"
                name="Religion"
                value={formData.Religion}
                onChange={(e) => setFormData((prev) => ({ ...prev, Religion: e.target.value }))}
                className="w-full p-3 mb-4 bg-white text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
                {["Agnostic", "Atheist", "Jewish", "Christian", "Catholic", "Muslim", "Not religious", "Other"].map((Religion) => (
                <option key={Religion} value={Religion}>{Religion}</option>
                ))}
            </select>
            <br/>

            <PersonalitySliders formData={formData} setFormData={setFormData} />

            </div>

            <button type="submit" className="w-full py-3 bg-rose-500 text-white text-lg font-bold rounded-lg hover:bg-yellow-600 transition duration-300">
            Submit
            </button>
        </form>
    );
}
