# Student List Renderer 👨‍🎓

A simple, dynamic student list renderer built with vanilla JavaScript. The project demonstrates template-based rendering with a clean, modern UI.

## 🌟 Live Demo
Visit the live demo: [Student List Renderer](https://[your-username].github.io/[repository-name])

## ✨ Features
- Dynamic student data loading
- Custom templating engine
- Modern hover effects

## 🛠️ Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript

## 📁 Project Structure
```
student-list-renderer/
├── css/
│   └── styles.css
├── js/
│   └── index.js
├── index.html
└── README.md
```

## 💻 Code Examples

### HTML Template
```html
<div id="template_student">
    <li>
        <label class="bla1 bla2">name: </label><span>[name]</span><br>
        <label>age: </label><span row-type="integer">[age]</span><br>
        <label>class: </label><span>[class]</span><br>
    </li>
</div>
```

### Student Data Structure
```javascript
const DATA_LIST_ID = [
    { name: 'ariel', age: 35, class: 'angular'},
    { name: 'yakov', age: 33, class: 'angular 2'},
    // ...more students
];
```

## 🚀 Setup and Deployment

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/Eliyahu-Yishai/Js-Render-Engine.git
   ```
2. Open `index.html` in a web browser
   - Use a local server (like Live Server in VS Code)
   - Required for ES6 modules to work



## 📝 Usage Instructions
1. Click "Show student list" button to load the data
2. Student list will render with names, ages, and classes
3. Hover over items to see animation effect


