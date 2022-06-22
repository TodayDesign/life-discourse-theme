import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", api => {
  console.log("hello world from api initializer!");
});


// Update the font variable
document.documentElement.style.setProperty('--heading-font-family', `'Poppins', Arial, Helvetica, sans-serif`);

// Highlight medium
document.documentElement.style.setProperty('--highlight-medium', '#F3F3F3');
document.documentElement.style.setProperty('--danger-medium', '#c75218');
document.documentElement.style.setProperty('--primary-medium', '#cccccc');

// Update base font size
document.documentElement.style.setProperty('--base-font-size', '1em');

// Update gold, silver bronze
document.documentElement.style.setProperty('--gold', '#ffaa5c');
document.documentElement.style.setProperty('--silver', '#85d7e9');
document.documentElement.style.setProperty('--bronze', '#ba96e3');
