import Generation from '../assets/certifications/generation.jpg';
import W3Schools from '../assets/certifications/w3schools.jpg';
import Perscholas from '../assets/certifications/perscholas.jpg';

// Import Generation.pdf file
import GenerationPDF from '../assets/Generation.pdf';
// Import Perscholas.jpeg image
import PerscholasImage from '../assets/Perscholas.jpeg';

export const data = [
    {
        id: 1,
        name: "Generation Certification",
        image: Generation,
        view: GenerationPDF, // Set the view property to the imported PDF file
    },
    {
        id: 3,
        name: "W3Schools Certification",
        image: W3Schools,
        view: "https://verify.w3schools.com/1MZ192BUA5",
    },
    {
        id: 2,
        name: "Perscholas Certification",
        image: Perscholas,
        view: PerscholasImage, // Set the view property to the path of Perscholas.jpeg
    },
];

