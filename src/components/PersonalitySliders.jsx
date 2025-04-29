{/* Bena Smith 03/28/2025
  This file contains the sliders used in the member form for personality, outdoorsy, and politically correct
  */}
  
import React from 'react'
import { Slider } from "@mui/material";


const LabeledSlider = ({ labels, title, value, onChange }) => {
  const displayTitle = title.replace(/_/g, " "); // so Politically_Coorect displays without the underscore

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h3 className="text-xl font-bold">{displayTitle}</h3>
      <Slider
        value={value}
        min={0}
        max={labels.length -1}
        step={1}
        marks
        onChange={(event, newValue) => onChange(title, newValue)}
        sx={{
          '& .MuiSlider-thumb': {
            backgroundColor: '#4F46E5', 
            borderColor: '#312E81', 
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#D1D5DB', 
          },
          '& .MuiSlider-track': {
            backgroundColor: '#4F46E5', 
          },
        }}
      />
      <div className="text-lg font-semibold">{labels[value]}</div>
    </div>
  );
};

export default function PersonalitySliders({ formData, setFormData }) {
  const handleSliderChange = (title, newValue) => {
    setFormData((prev) => ({ ...prev, [title]: newValue }));
  };

  return (
    <div className="space-y-6 text-white">
      <LabeledSlider
        title="Outgoing"
        labels={["Very Introverted", "Introverted", "Neutral", "Outgoing", "Very Outgoing"]}
        value={formData.Outgoing}
        onChange={handleSliderChange}
      />
      <LabeledSlider
        title="Outdoorsy"
        labels={["Never Outdoors", "Rarely Outdoors", "Sometimes Outdoors", "Often Outdoors", "Always Outdoors"]}
        value={formData.Outdoorsy}
        onChange={handleSliderChange}
      />
      <LabeledSlider
        title="Politically_Correct"
        labels={["Not at all", "Somewhat not", "Neutral", "Somewhat", "Very"]}
        value={formData.Politically_Correct}
        onChange={handleSliderChange}
      />
    </div>
  );
}
