// Career start date - Update this to your actual start date
export const CAREER_START_DATE = new Date('2017-06-01'); // Adjust to your actual start date

/**
 * Calculate years of experience from career start date to now
 * @returns Formatted string like "08+" or "10+"
 */
export const getYearsOfExperience = (): string => {
  const now = new Date();
  const years = now.getFullYear() - CAREER_START_DATE.getFullYear();
  const monthDiff = now.getMonth() - CAREER_START_DATE.getMonth();
  
  // Adjust if we haven't reached the anniversary month yet
  const actualYears = monthDiff < 0 ? years - 1 : years;
  
  // Format as "08+" style
  return actualYears < 10 ? `0${actualYears}+` : `${actualYears}+`;
};

/**
 * Get years of experience as a number
 * @returns Number of years
 */
export const getYearsOfExperienceNumber = (): number => {
  const now = new Date();
  const years = now.getFullYear() - CAREER_START_DATE.getFullYear();
  const monthDiff = now.getMonth() - CAREER_START_DATE.getMonth();
  
  return monthDiff < 0 ? years - 1 : years;
};

