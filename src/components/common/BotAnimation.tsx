import React from 'react';

const BotAnimation: React.FC = () => {
  return (
    <div className="bot-container">
      {/* Bot Body */}
      <div className="bot-body">
        {/* Bot Head */}
        <div className="bot-head">
          {/* Eyes */}
          <div className="bot-eyes">
            <div className="bot-eye left-eye">
              <div className="eye-pupil"></div>
            </div>
            <div className="bot-eye right-eye">
              <div className="eye-pupil"></div>
            </div>
          </div>
          
          {/* Antenna */}
          <div className="bot-antenna">
            <div className="antenna-base"></div>
            <div className="antenna-tip"></div>
          </div>
        </div>
        
        {/* Bot Base */}
        <div className="bot-base">
          <div className="bot-pattern">
            <div className="pattern-dot"></div>
            <div className="pattern-dot"></div>
            <div className="pattern-dot"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bot-container {
          position: relative;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          animation: bot-float 6s ease-in-out infinite;
        }

        .bot-body {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .bot-head {
          position: relative;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #10ac8b 0%, #0d9488 100%);
          border-radius: 50%;
          margin-bottom: -10px;
          z-index: 2;
          animation: head-tilt 4s ease-in-out infinite;
          box-shadow: 0 8px 25px rgba(16, 172, 139, 0.3);
        }

        .bot-eyes {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -60%);
          display: flex;
          gap: 12px;
        }

        .bot-eye {
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          position: relative;
          animation: blink 3s ease-in-out infinite;
        }

        .eye-pupil {
          width: 6px;
          height: 6px;
          background: #094d88;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: eye-movement 5s ease-in-out infinite;
        }

        .bot-antenna {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          animation: antenna-wiggle 2s ease-in-out infinite;
        }

        .antenna-base {
          width: 3px;
          height: 15px;
          background: #094d88;
          border-radius: 2px;
          margin: 0 auto;
        }

        .antenna-tip {
          width: 8px;
          height: 8px;
          background: #10ac8b;
          border-radius: 50%;
          margin: -2px auto 0;
          animation: tip-glow 2s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(16, 172, 139, 0.6);
        }

        .bot-base {
          width: 120px;
          height: 100px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border-radius: 60px 60px 30px 30px;
          position: relative;
          z-index: 1;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .bot-pattern {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          gap: 8px;
        }

        .pattern-dot {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          border-radius: 50%;
          animation: pattern-pulse 2s ease-in-out infinite;
        }

        .pattern-dot:nth-child(2) {
          animation-delay: 0.3s;
        }

        .pattern-dot:nth-child(3) {
          animation-delay: 0.6s;
        }

        /* Animations */
        @keyframes bot-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes head-tilt {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }

        @keyframes blink {
          0%, 90%, 100% {
            transform: scaleY(1);
          }
          95% {
            transform: scaleY(0.1);
          }
        }

        @keyframes eye-movement {
          0%, 100% {
            transform: translate(-50%, -50%);
          }
          25% {
            transform: translate(-70%, -50%);
          }
          75% {
            transform: translate(-30%, -50%);
          }
        }

        @keyframes antenna-wiggle {
          0%, 100% {
            transform: translateX(-50%) rotate(0deg);
          }
          50% {
            transform: translateX(-50%) rotate(10deg);
          }
        }

        @keyframes tip-glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(16, 172, 139, 0.6);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 20px rgba(16, 172, 139, 0.9);
            transform: scale(1.2);
          }
        }

        @keyframes pattern-pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default BotAnimation;