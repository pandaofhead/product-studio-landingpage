// lib/gtag.js
export const GA_TRACKING_ID = 'G-Z3EKN1HPPV'

// Initialize gtag function
export const gtag = (...args) => {
  if (window && window.gtag) {
    window.gtag(...args)
  }
}
