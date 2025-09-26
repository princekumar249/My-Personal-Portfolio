import React from 'react';

const SkillRating = ({ level, showStar }) => {
    const totalStars = 5;

    return (
        <div>
            {
                showStar && (
                    <div className="text-yellow-500 text-lg">
                        {Array.from({ length: totalStars }, (_, index) => (
                            <span key={index}>
                                {index < level ? "★" : "☆"}
                            </span>
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default SkillRating;
