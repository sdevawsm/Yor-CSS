// Yor CSS - Main JavaScript Entry Point
import Alert from './components/alert';

// Version
const VERSION = '1.0.0';

// Main Yor CSS object
const YorCSS = {
  VERSION,
  Alert
};

// Auto-initialize components on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  Alert.autoInit();
});

// Export for module systems
export default YorCSS;

// Also make available globally
if (typeof window !== 'undefined') {
  window.YorCSS = YorCSS;
}
