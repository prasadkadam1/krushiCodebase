// Utility functions for animations and styling

/**
 * Generate animation delay style object
 * @param {number} index - Item index
 * @param {number} baseDelay - Base delay in seconds (default: 0.1)
 * @param {number} increment - Increment per item in seconds (default: 0.07)
 * @returns {Object} Style object with animation delay
 */
export const getAnimationDelay = (index, baseDelay = 0.1, increment = 0.07) => ({
  animationDelay: `${baseDelay + index * increment}s`
});

/**
 * Generate animation delay style object with milliseconds
 * @param {number} index - Item index
 * @param {number} baseDelay - Base delay in milliseconds (default: 100)
 * @param {number} increment - Increment per item in milliseconds (default: 100)
 * @returns {Object} Style object with animation delay
 */
export const getAnimationDelayMs = (index, baseDelay = 100, increment = 100) => ({
  animationDelay: `${baseDelay + index * increment}ms`
});

/**
 * Generate staggered animation delay for grid items
 * @param {number} index - Item index
 * @param {number} baseDelay - Base delay in seconds (default: 0.1)
 * @param {number} increment - Increment per item in seconds (default: 0.07)
 * @returns {Object} Style object with animation delay
 */
export const getStaggeredDelay = (index, baseDelay = 0.1, increment = 0.07) => ({
  animationDelay: `${baseDelay + index * increment}s`
});

/**
 * Generate animation delay for table rows
 * @param {number} index - Row index
 * @param {number} baseDelay - Base delay in seconds (default: 0.1)
 * @param {number} increment - Increment per row in seconds (default: 0.07)
 * @returns {Object} Style object with animation delay
 */
export const getRowAnimationDelay = (index, baseDelay = 0.1, increment = 0.07) => ({
  animationDelay: `${baseDelay + index * increment}s`
}); 