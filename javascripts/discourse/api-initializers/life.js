import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", api => {
  console.log("hello world from api initializer!");
});


// Update the font variable
document.documentElement.style.setProperty('--heading-font-family', `'Poppins', Arial, Helvetica, sans-serif`);

// Highlight medium
document.documentElement.style.setProperty('--highlight-medium', '#F3F3F3');

// Update base font size
document.documentElement.style.setProperty('--base-font-size', '1em');

// Update gold, silver bronze
document.documentElement.style.setProperty('--gold', '#FFE924');
document.documentElement.style.setProperty('--silver', '#85d7e9');
document.documentElement.style.setProperty('--bronze', '#ba96e3');
