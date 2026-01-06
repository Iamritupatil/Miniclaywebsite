import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // State for modals/effects
  const [activeModal, setActiveModal] = useState(null); // 'view', 'help', 'bsod'
  const [isMatingScene, setIsMatingScene] = useState(false);
  
  // Close modals on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setUsername('');
    setPassword('');
  };

  const handleMenuClick = (menu) => {
    if (menu === 'View') {
        setActiveModal('view');
        // 50% chance of mating scene
        setIsMatingScene(Math.random() > 0.5);
    }
    if (menu === 'Help') setActiveModal('help');
    if (menu === 'Edit') setActiveModal('bsod');
  };

  const closeModal = () => setActiveModal(null);
  
  const handleClose = () => {
    navigate('/');
  };

  // BSOD Component
  if (activeModal === 'bsod') {
    return (
      <div 
        className="fixed inset-0 bg-[#0000AA] text-white font-mono p-8 cursor-none z-50 flex flex-col items-center justify-center text-center select-none"
        onClick={closeModal}
      >
        <div className="max-w-3xl text-left">
          <p className="bg-[#AAAAAA] text-[#0000AA] inline-block px-1 mb-4 font-bold">WINDOWS</p>
          <p className="mb-8">A fatal exception 0E has occurred at 0028:C0011E36 in VXD VMM(01) + 00010E36. The current application will be terminated.</p>
          <p className="mb-4">* Press any key to terminate the current application.</p>
          <p className="mb-4">* Press CTRL+ALT+DEL again to restart your computer. You will lose any unsaved information in all applications.</p>
          <p className="mt-12 text-center w-full">Press any key to continue_</p>
        </div>
        <style>{`body { margin: 0; overflow: hidden; background: #0000AA; }`}</style>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#404040] p-4 relative overflow-hidden">
      {/* Styles injected directly */}
      <style>{`
        .win98-container {
          width: 24rem;
          font-family: "Tahoma", "Pixelated MS Sans Serif", sans-serif;
          position: relative;
          isolation: isolate;
          --win98-blue: #0a246a;
          --win98-light: #c0c0c0;
          --win98-dark: #808080;
          --win98-white: #ffffff;
          --win98-black: #000000;
        }

        .win98-window {
          background: var(--win98-light);
          border: 2px solid;
          border-color: var(--win98-white) var(--win98-dark) var(--win98-dark) var(--win98-white);
          position: relative;
          z-index: 10;
          box-shadow: 2px 2px 0px rgba(0,0,0,0.2);
        }
        
        /* Modal Window Styling Override */
        .win98-window.modal {
            position: absolute;
            top: -50px;
            left: 40px;
            z-index: 100;
            width: 300px;
            box-shadow: 10px 10px 0 rgba(0,0,0,0.5);
            animation: pop-in 0.2s;
        }

        .win98-window.msgbox {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 200;
            width: 200px;
        }

        .win98-titlebar {
          background: linear-gradient(to right, var(--win98-blue), #0a248a);
          color: white;
          padding: 3px 2px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 2px; 
        }
        
        .win98-title {
          font-size: 0.8rem;
          font-weight: bold;
          margin-left: 4px;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .win98-icon {
          width: 12px;
          height: 12px;
          background: white;
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='4' stroke-linecap='square' stroke-linejoin='miter'%3E%3Crect x='3' y='3' width='18' height='18' /%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='4' stroke-linecap='square' stroke-linejoin='miter'%3E%3Crect x='3' y='3' width='18' height='18' /%3E%3C/svg%3E");
          background-color: white;
        }
        
        .win98-controls {
          display: flex;
          gap: 2px;
        }

        .win98-button {
          width: 16px;
          height: 14px;
          background: var(--win98-light);
          border: 1px solid;
          border-color: var(--win98-white) var(--win98-dark) var(--win98-dark) var(--win98-white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: bold;
          cursor: pointer;
          user-select: none;
          color: black;
          line-height: 1;
          padding-bottom: 2px;
        }

        .win98-button:active {
          border-color: var(--win98-dark) var(--win98-white) var(--win98-white) var(--win98-dark);
          padding: 1px 0 0 1px;
        }

        .win98-content {
          padding: 12px;
        }

        .win98-menu-bar {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
          padding: 0 6px;
        }

        .win98-menu-item {
          font-size: 0.8rem;
          cursor: pointer;
          position: relative;
          color: black;
        }
        
        .win98-menu-item:hover {
            background-color: var(--win98-blue);
            color: white;
        }
        
        .win98-menu-item u {
          text-decoration: underline;
        }

        .win98-form-group {
          margin-bottom: 12px;
        }

        .win98-label {
          font-size: 0.8rem;
          margin-bottom: 4px;
          display: block;
          color: var(--win98-black);
        }

        .win98-input-frame {
          display: flex;
          align-items: center;
        }

        .win98-input {
          width: 100%;
          height: 24px;
          background: white;
          border: 2px solid;
          border-color: var(--win98-dark) var(--win98-white) var(--win98-white) var(--win98-dark);
          font-family: "Tahoma", sans-serif;
          font-size: 0.8rem;
          padding: 0 4px;
          outline: none;
          color: black;
        }
        
        .win98-btn-wrapper {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-top: 24px;
        }

        .win98-action-btn {
            background: var(--win98-light);
            border: 1px solid;
            border-color: var(--win98-white) var(--win98-black) var(--win98-black) var(--win98-white);
            padding: 4px 12px;
            font-family: "Tahoma", sans-serif;
            font-size: 0.75rem;
            cursor: pointer;
            min-width: 75px;
            color: black;
        }

        .win98-action-btn:active {
            border-color: var(--win98-black) var(--win98-white) var(--win98-white) var(--win98-black);
            padding: 5px 11px 3px 13px;
        }

        .win98-action-btn.primary {
            border: 2px solid;
            border-color: var(--win98-white) var(--win98-black) var(--win98-black) var(--win98-white);
            box-shadow: inset 1px 1px 0px white, inset -1px -1px 0px #808080;
        }
        
        .win98-status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--win98-light);
          color: black;
          padding: 2px 4px;
          font-size: 0.7rem;
          border: 1px solid;
          border-color: var(--win98-dark) var(--win98-white) var(--win98-white) var(--win98-dark);
          margin: 0 2px 2px 2px;
        }

        .win98-resize-handle {
          position: absolute;
          bottom: 4px;
          right: 4px;
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, transparent 0%, transparent 50%, var(--win98-dark) 50%, var(--win98-dark) 60%, transparent 60%, transparent 70%, var(--win98-dark) 70%, var(--win98-dark) 80%, transparent 80%);
          cursor: nw-resize;
          z-index: 25;
        }

        /* SCENE STYLES */
        .paint-canvas {
            background: white;
            border: 2px solid;
            border-color: var(--win98-dark) var(--win98-white) var(--win98-white) var(--win98-dark);
            height: 200px;
            position: relative;
            overflow: hidden;
            transition: all 0.5s ease;
        }
        
        .sky {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 50%;
            background: #00FFFF;
            transition: background 0.5s ease;
        }
        .grass {
            position: absolute;
            top: 50%; left: 0; right: 0; bottom: 0;
            background: #008000;
            transition: background 0.5s ease;
        }
        .tree {
            position: absolute;
            font-size: 2rem;
            bottom: 20px;
            transition: all 0.5s ease;
        }
        .cow {
            position: absolute;
            font-size: 1.5rem;
            bottom: 10px;
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .mini-window {
            position: absolute;
            top: 20px; right: 20px;
            width: 100px;
            background: #c0c0c0;
            border: 2px solid #ffffff;
            border-right-color: #000000;
            border-bottom-color: #000000;
            padding: 2px;
            font-size: 10px;
        }
        .msg-icon {
            font-size: 24px;
            color: #d63031;
            margin-right: 12px;
        }
        
        @keyframes pop-in {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }

        @keyframes heart-float {
            0% { transform: translateY(0) scale(1); opacity: 0; }
            20% { opacity: 1; }
            100% { transform: translateY(-40px) scale(1.5); opacity: 0; }
        }
      `}</style>

      <div className="win98-container">
        
        {/* VIEW MODAL: Nature Scene */}
        {activeModal === 'view' && (
            <div className="win98-window modal">
                <div className="win98-titlebar">
                    <div className="win98-title"><div className="win98-icon"></div>Nature.bmp - Paint</div>
                    <div className="win98-controls">
                        <div className="win98-button close" onClick={closeModal}>×</div>
                    </div>
                </div>
                <div className="win98-content">
                    <div className="paint-canvas">
                        <div className="sky" style={{ background: isMatingScene ? '#FFD1DC' : '#00FFFF' }}></div>
                        <div className="grass" style={{ background: isMatingScene ? '#90EE90' : '#008000' }}></div>
                        
                        <div className="tree" style={{left: '20px'}}>🌲</div>
                        <div className="tree" style={{left: '60px'}}>🌲</div>
                        <div className="tree" style={{left: '200px'}}>🌳</div>
                        
                        {isMatingScene ? (
                           <>
                             {/* Clingy Mating Scene */}
                             <div className="cow" style={{left: '115px', zIndex: 2}}>🐄</div>
                             <div className="cow" style={{left: '135px', transform: 'scaleX(-1)', zIndex: 1}}>🐄</div>
                             <div style={{position: 'absolute', bottom: '50px', left: '130px', fontSize: '24px', animation: 'heart-float 1.5s infinite'}}>💗</div>
                             <div style={{position: 'absolute', bottom: '60px', left: '120px', fontSize: '20px', animation: 'heart-float 2s infinite 0.7s'}}>💕</div>
                           </>
                        ) : (
                           <>
                             {/* Normal Scene */}
                             <div className="cow" style={{left: '100px'}}>🐄</div>
                             <div className="cow" style={{left: '150px'}}>🐄</div>
                           </>
                        )}
                        
                        <div className="mini-window">
                            <div style={{background: 'navy', color: 'white', padding: '1px'}}>Preview</div>
                            <div style={{background: 'white', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                {isMatingScene ? '😳' : ':)'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* HELP MODAL: Me too :) */}
        {activeModal === 'help' && (
            <div className="win98-window msgbox">
                <div className="win98-titlebar">
                    <div className="win98-title">Help Topic</div>
                    <div className="win98-controls">
                        <div className="win98-button close" onClick={closeModal}>×</div>
                    </div>
                </div>
                <div className="win98-content" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px'}}>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '16px'}}>
                        <div className="msg-icon">ℹ️</div>
                        <div>me too :)</div>
                    </div>
                    <button className="win98-action-btn primary" onClick={closeModal}>OK</button>
                </div>
            </div>
        )}

        {/* MAIN LOGIN WINDOW */}
        <div className="win98-window">
          {/* Title Bar */}
          <div className="win98-titlebar">
            <div className="win98-title">
              <div className="win98-icon"></div>
              {isRegister ? 'Registration' : 'Login'}
            </div>
            <div className="win98-controls">
              <div className="win98-button" aria-label="Minimize">_</div>
              <div className="win98-button" aria-label="Maximize">□</div>
              <div className="win98-button close" aria-label="Close" onClick={handleClose}>×</div>
            </div>
          </div>

          <div className="win98-content">
            {/* Menu Bar */}
            <div className="win98-menu-bar">
              <span className="win98-menu-item" onClick={() => handleMenuClick('File')}><u>F</u>ile</span>
              <span className="win98-menu-item" onClick={() => handleMenuClick('Edit')}><u>E</u>dit</span>
              <span className="win98-menu-item" onClick={() => handleMenuClick('View')}><u>V</u>iew</span>
              <span className="win98-menu-item" onClick={() => handleMenuClick('Help')}><u>H</u>elp</span>
            </div>

            {/* Form Inputs */}
            <div className="win98-form-group">
              <label className="win98-label">Username:</label>
              <div className="win98-input-frame">
                <input 
                  type="text" 
                  className="win98-input" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="win98-form-group">
              <label className="win98-label">Password:</label>
              <div className="win98-input-frame">
                <input 
                  type="password" 
                  className="win98-input" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {isRegister && (
              <div className="win98-form-group">
                <label className="win98-label">Confirm Password:</label>
                <div className="win98-input-frame">
                  <input 
                    type="password" 
                    className="win98-input" 
                  />
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="win98-btn-wrapper">
               <button 
                type="button" 
                className="win98-action-btn"
                onClick={toggleMode}
              >
                {isRegister ? 'Cancel' : 'Register...'}
              </button>
              <button 
                type="button" 
                className="win98-action-btn primary"
              >
                OK
              </button>
            </div>
          </div>
          
          {/* Status Bar */}
          <div className="win98-status-bar">
              <div className="win98-status-text">
                {isRegister ? 'Please enter details.' : 'Ready'}
              </div>
          </div>
          
          <div className="win98-resize-handle" />
        </div>
      </div>
    </div>
  );
}
