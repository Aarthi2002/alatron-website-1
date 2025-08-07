'use client';
import { useRef, useState } from 'react';

export default function AI_VoicePlayer() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* AI Image */}
      <img 
        src="/assets/home/ai.webp" 
        alt="AI Illustration" 
        className="w-64 h-64 object-contain"
      />

      {/* Video Player */}
      <video ref={videoRef} className="w-full max-w-3xl" autoPlay loop muted>
        <source src="/assets/videos/ai_voice.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mute / Speak Button */}
      <button
        onClick={toggleMute}
        className="px-6 py-2 text-white font-semibold rounded bg-blue-600 hover:bg-blue-800 transition"
      >
        {isMuted ? '🔇 Speak' : '🔊 Mute'}
      </button>
    </div>
  );
}
