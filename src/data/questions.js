export const data = {
  'Web Development – Core': {
    'What is web development?':
      'The process of building and maintaining websites or web apps, covering structure, design, and functionality.',
    'What are the main types of web development?':
      'Frontend (UI/UX), Backend (server, database), and Full-stack (both).',
    'What is the difference between a website and a web application?':
      'A website mainly displays information; a web app allows interaction and user actions.',
    'What are the three pillars of the web?':
      'HTML (structure), CSS (style), JavaScript (behavior).',
    'What is responsive design?':
      'Designing websites to work across devices (desktop, tablet, mobile) with fluid layouts.',
    'Frontend Essentials': {
      'What makes a good user interface?':
        'Simplicity, clarity, accessibility, and consistency.',
      'What is semantic HTML?':
        'Using HTML tags that describe content meaning (e.g., <header>, <article>).',
      'Why is accessibility important?':
        'It ensures people with disabilities can use your website.',
      'What is cross-browser compatibility?':
        'Making sure a site works consistently across different browsers.',
      'What is progressive enhancement?':
        'Building a solid basic experience, then adding advanced features for capable browsers.',
    },
    'Backend Essentials': {
      'What is the role of a backend in web development?':
        'Handling business logic, databases, authentication, and APIs.',
      'What is a database?':
        'A system for storing, organizing, and retrieving structured data.',
      'What is server-side rendering?':
        'Generating HTML on the server before sending it to the browser.',
      'What is client-side rendering?':
        'Generating the UI in the browser using JavaScript.',
      'What is caching?':
        'Storing frequently used data temporarily to improve performance.',
    },
    'Internet & Web Fundamentals': {
      'What is HTTP?':
        'The protocol used for communication between browser and server.',
      'What is HTTPS?':
        'HTTP with encryption (SSL/TLS) for secure data transfer.',
      'What is a domain name?':
        'A human-readable address (e.g., google.com) that maps to an IP.',
      'What is DNS?':
        'The system that translates domain names into IP addresses.',
      'What is a URL?': 'The unique address of a resource on the web.',
    },
    'Development Practices': {
      'What is version control?':
        'A system (like Git) to track changes and collaborate on code.',
      'What is code refactoring?':
        'Improving code structure without changing its behavior.',
      'What is the DRY principle?':
        'Don’t Repeat Yourself — avoid code duplication.',
      'What is technical debt?':
        'Shortcuts in code that save time now but cost more later.',
      'Why are coding standards important?':
        'They keep code consistent, readable, and maintainable.',
    },
    'Performance & Optimization': {
      'Why is website speed important?':
        'Faster websites improve user experience and SEO rankings.',
      'What is lazy loading?':
        'Loading resources (like images) only when needed.',
      'What is minification?':
        'Removing unnecessary characters (spaces, comments) from code.',
      'What is compression in web development?':
        'Reducing file sizes (e.g., Gzip, Brotli) to speed up load times.',
      'What is a CDN?':
        'A network of servers that delivers content from the closest location to users.',
    },
    'Security & Reliability': {
      'Why is security important in web development?':
        'To protect user data and prevent attacks.',
      'What is authentication vs authorization?':
        'Authentication = verify identity; Authorization = grant permissions.',
      'What is XSS?':
        'Cross-Site Scripting — injecting malicious scripts into web pages.',
      'What is CSRF?':
        'Cross-Site Request Forgery — tricking users into unintended actions.',
      'What is data validation?':
        'Ensuring user input is safe and meets expected format.',
    },
    'Project & Career': {
      'What is Agile in web development?':
        'An iterative approach to software development with fast feedback.',
      'What is the role of a full-stack developer?':
        'Someone who works on both frontend and backend.',
      'What is an MVP?':
        'Minimum Viable Product — the simplest usable version of a product.',
      'What is the difference between a developer and a designer?':
        'Developer writes code; designer creates visuals and UX.',
      'What are soft skills important for web developers?':
        'Communication, problem-solving, adaptability, teamwork.',
    },
    'Trends & Future': {
      'What is mobile-first design?':
        'Designing for mobile devices first, then scaling up to larger screens.',
      'What is SEO in web development?':
        'Optimizing websites for better search engine visibility.',
      'What is the difference between static and dynamic sites?':
        'Static = fixed content; Dynamic = content changes via backend logic.',
      'What is a headless CMS?':
        'A content system that provides data via API, separate from the frontend.',
      'What is JAMstack?':
        'A modern architecture: JavaScript, APIs, and Markup.',
    },
    'Mindset & Big Picture': {
      'Why is simplicity valuable in web development?':
        'Simple solutions are easier to build, maintain, and scale.',
      'What is scalability?':
        'The ability of a system to handle growth in traffic or data.',
      'What is maintainability?':
        'How easily code can be updated and extended over time.',
      'What is the difference between learning tools vs fundamentals?':
        'Tools change fast; fundamentals last and guide learning.',
      'What is the ultimate goal of web development?':
        'To solve real problems for users through accessible, reliable, and efficient digital experiences.',
    },
  },
  'Web Development (technologies specific)': {
    'HTML & Basics': {
      'What is HTML?':
        'HyperText Markup Language, the standard for structuring web content.',
      'Difference between block and inline elements?':
        'Block: takes full width (div, p). Inline: flows inside text (span, a).',
      'What are semantic tags?':
        'Tags like <header>, <section>, <article> that describe meaning, not just structure.',
      'What’s the difference between <id> and <class>?':
        'id = unique per page, class = reusable for multiple elements.',
      'How do you improve accessibility in HTML?':
        'Use semantic tags, alt attributes, ARIA roles, proper heading structure.',
    },
    'CSS & Styling': {
      'What is CSS specificity?':
        'Defines which style wins: Inline > ID > Class > Element.',
      'Difference between relative, absolute, fixed, and sticky positioning?':
        'Relative = normal flow offset, Absolute = positioned to parent, Fixed = viewport, Sticky = scroll-aware.',
      'What is responsive design?':
        'Design that adapts across devices using fluid grids, flexbox, media queries.',
      'What’s the difference between em, rem, and px?':
        'em = relative to parent font-size, rem = root font-size, px = fixed.',
      'Why use CSS variables?':
        'Centralized theming, easier maintenance (--primary-color).',
    },
    'JavaScript (Core)': {
      'What is the difference between var, let, and const?':
        'var = function scoped, let = block scoped, const = block scoped + immutable binding.',
      'What are closures?':
        'Functions that capture variables from their outer scope even after that scope ends.',
      'What is the difference between == and ===?':
        '== checks value with type coercion, === checks value + type strictly.',
      'What is event bubbling and capturing?':
        'Bubbling = event goes child → parent, Capturing = parent → child.',
      'What is the difference between synchronous and asynchronous code?':
        'Sync = runs line by line, Async = doesn’t block execution (promises, async/await).',
    },
    'JavaScript (Advanced)': {
      'What are Promises?':
        'Objects representing eventual completion/failure of async tasks.',
      'What is async/await?':
        'Syntactic sugar over promises, makes async code look synchronous.',
      'Difference between null and undefined?':
        'undefined = variable declared but not assigned, null = intentional empty value.',
      'What is hoisting?':
        'JS moves function/var declarations to top before execution.',
      'What are ES6 features?':
        'Arrow functions, template literals, destructuring, spread/rest, classes, modules.',
    },
    'React (Frontend Framework Example)': {
      'What is React?':
        'A JavaScript library for building UIs with components.',
      'What are React hooks?':
        'Functions like useState, useEffect that add state and lifecycle to components.',
      'Difference between controlled and uncontrolled components?':
        'Controlled = React manages state, Uncontrolled = DOM manages state.',
      'What is JSX?':
        'Syntax extension mixing HTML + JS inside React components.',
      'What are props vs state?':
        'Props = external input, State = internal, changeable data.',
    },
    'Backend Basics': {
      'What is an API?':
        'Application Programming Interface, rules for communicating between systems.',
      'Difference between REST and GraphQL?':
        'REST = multiple endpoints/resources, GraphQL = single endpoint, flexible queries.',
      'What is authentication vs authorization?':
        'AuthN = verifying identity, AuthZ = verifying permissions.',
      'What is middleware?':
        'Functions between request and response handling (logging, auth).',
      'What are environment variables used for?':
        'Config values (API keys, DB passwords) stored securely outside code.',
    },
    Databases: {
      'Difference between SQL and NoSQL?':
        'SQL = structured, relational (Postgres, MySQL). NoSQL = flexible, non-relational (MongoDB).',
      'What is indexing in databases?':
        'Speeds up queries by creating quick lookup paths.',
      'What is normalization?':
        'Organizing data to reduce redundancy and improve consistency.',
      'Difference between primary key and foreign key?':
        'Primary = unique identifier, Foreign = reference to another table’s primary.',
      'When to use caching?':
        'To reduce repeated DB hits and improve performance.',
    },
    'Web Performance': {
      'What are common ways to optimize web performance?':
        'Minify assets, use CDN, lazy loading, caching, image compression.',
      'What is lazy loading?':
        'Loading resources only when needed (e.g., images on scroll).',
      'What is a CDN?':
        'Content Delivery Network, distributes assets closer to users for speed.',
      'Difference between SSR and CSR?':
        'SSR = server renders HTML, CSR = browser renders via JS.',
      'What are Core Web Vitals?':
        'Google metrics: LCP (load), FID (interactivity), CLS (stability).',
    },
    Security: {
      'What is XSS?':
        'Cross-Site Scripting, injecting malicious scripts into a site.',
      'What is CSRF?':
        'Cross-Site Request Forgery, tricking a user into sending unwanted requests.',
      'How to secure passwords?':
        'Hash (bcrypt/argon2), salt, never store plain text.',
      'What is HTTPS?': 'HTTP + SSL/TLS encryption for secure communication.',
      'Why use JWT?':
        'Compact, secure way to transmit authentication info as JSON tokens.',
    },
    'DevOps & Tools': {
      'What is Git?': 'Version control system to track code changes.',
      'Difference between Git pull and Git fetch?':
        'Fetch = downloads changes, Pull = fetch + merge into branch.',
      'What is CI/CD?':
        'Continuous Integration / Continuous Deployment for automated builds & releases.',
      'What is Docker?':
        'Tool to containerize apps so they run consistently across environments.',
      'What’s the difference between monolithic and microservices architecture?':
        'Monolithic = all-in-one app, Microservices = small, independent services communicating via APIs.',
    },
  },
  HTML: {
    'Top 50 HTML Q&A (Simple + Industry Standard)': '',
    'Basics & Structure': {
      'What is HTML?': 'Markup language for structuring web pages.',
      'What are HTML elements?':
        'Building blocks defined by start tag, content, end tag.',
      'Difference between HTML and XHTML?':
        'XHTML is stricter, requires proper closing tags.',
      'What is the difference between inline and block elements?':
        'Block = full width (div), Inline = inside text flow (span).',
      'What is the difference between <head> and <body>?':
        'Head = metadata (title, links), Body = visible content.',
    },
    'Document Setup': {
      'What is <!DOCTYPE html>?': 'Declares HTML5 document type.',
      'What is the purpose of the <title> tag?':
        'Defines the page title shown in browser/tab/search engines.',
      'What does <meta charset="UTF-8"> do?':
        'Ensures proper encoding for all characters.',
      'What is the difference between <link> and <script>?':
        'link = external resources (CSS), script = JavaScript files.',
      'Why use <meta viewport>?':
        'Makes site responsive by controlling scaling on mobile.',
    },
    'Text & Formatting': {
      'What’s the difference between <b> and <strong>?':
        'b = bold visually, strong = semantic emphasis.',
      'Difference between <i> and <em>?':
        'i = italic visually, em = semantic emphasis.',
      'What are semantic headings (<h1>–<h6>)?':
        'Define importance hierarchy for SEO + accessibility.',
      'What’s the difference between <br> and <p>?':
        'br = line break, p = full paragraph block.',
      'What’s the difference between <pre> and <code>?':
        'pre = preserves formatting, code = inline code.',
    },
    'Links & Media': {
      'What is the purpose of the <a> tag?': 'Creates hyperlinks.',
      'Difference between absolute and relative URLs?':
        'Absolute = full path, Relative = relative to current location.',
      'What does target="_blank" do?': 'Opens link in new tab.',
      'Why use rel="noopener noreferrer" with _blank?':
        'Prevents security risk and performance leaks.',
      'What’s the difference between <img> and <picture>?':
        'img = static image, picture = responsive images with multiple sources.',
    },
    'Lists & Tables': {
      'Difference between <ol> and <ul>?':
        'ol = ordered list (numbers), ul = unordered (bullets).',
      'What is <dl>, <dt>, <dd>?': 'Description list, term, and description.',
      'What’s the purpose of <thead>, <tbody>, <tfoot>?':
        'Structure tables semantically for readability and styling.',
      'What is the difference between <th> and <td>?':
        'th = table header, td = table data.',
      'Why use <caption> in a table?':
        'Provides accessible description for the table.',
    },
    'Forms & Inputs': {
      'What’s the purpose of the <form> tag?':
        'Collects and submits user input.',
      'Difference between GET and POST in forms?':
        'GET = sends data in URL, POST = sends data in body (more secure).',
      'What is the purpose of the action attribute?':
        'Specifies where form data is sent.',
      'What does the method attribute do?':
        'Defines how data is submitted (GET/POST).',
      'What are some HTML5 input types?':
        'email, number, date, range, color, url, etc.',
      'What is the difference between required and pattern in inputs?':
        'required = can’t be empty, pattern = enforces regex validation.',
      'What is the use of the placeholder attribute?':
        'Shows hint text inside inputs.',
      'What does the disabled attribute do?':
        'Makes input non-editable and non-submittable.',
      'What’s the difference between readonly and disabled?':
        'Readonly = visible but not editable, Disabled = greyed out + ignored.',
      'What is the <label> tag used for?':
        'Connects text with input fields for accessibility.',
    },
    Multimedia: {
      'What’s the difference between <audio> and <video> tags?':
        'Audio = sound playback, Video = video playback.',
      'What are <source> and <track> tags?':
        'source = multiple file formats, track = captions/subtitles.',
      'What’s the difference between <canvas> and <svg>?':
        'Canvas = pixel-based drawing, SVG = vector graphics, scalable.',
      'Why use <iframe>?':
        'Embed external content like videos, maps, other sites.',
      'What are the risks of using <iframe>?':
        'Security (clickjacking), performance issues.',
    },
    'Accessibility & Semantics': {
      'What are semantic elements in HTML5?':
        'Elements like <header>, <footer>, <article>, <nav> that describe meaning.',
      'What’s the purpose of alt attribute in <img>?':
        'Provides description for screen readers & SEO.',
      'What is ARIA in HTML?':
        'Accessible Rich Internet Applications – attributes for accessibility.',
      'What’s the difference between <section> and <div>?':
        'Section = semantic grouping, Div = generic container.',
      'When should you use <main> tag?':
        'For the central, unique content of the page.',
    },
    'Modern HTML & Best Practices': {
      'What are custom data attributes (data-*)?':
        'Store extra data without affecting markup or layout.',
      'What’s the difference between inline, internal, and external CSS?':
        'Inline = inside tag, Internal = in <style>, External = separate file.',
      'What is progressive enhancement?':
        'Start with basic HTML, enhance with CSS/JS for advanced features.',
      'What’s the difference between HTML4 and HTML5?':
        'HTML5 introduced semantic tags, multimedia, form inputs, APIs.',
      'Why is HTML considered the skeleton of the web?':
        'It structures content; CSS styles it; JS makes it interactive.',
    },
  },
  CSS: {
    'Top 50 CSS Q&A (Simple + Industry Standard)': '',
    Basics: {
      'What is CSS?': 'Cascading Style Sheets – styles the HTML structure.',
      'What are the different types of CSS?': 'Inline, Internal, External.',
      'Why use external CSS?':
        'Separation of concerns, reusability, better maintainability.',
      'What is the difference between relative and absolute units?':
        'Relative = depends on context (em, %, rem), Absolute = fixed (px).',
      'What are pseudo-classes?':
        'Keywords like :hover, :focus, :nth-child applied to elements in states.',
    },
    Selectors: {
      'Difference between id and class selectors?':
        'ID = unique (#id), Class = reusable (.class).',
      'What is the difference between descendant and child selectors?':
        'Descendant: div p (any inside), Child: div > p (direct child only).',
      'What’s the difference between * and :root selectors?':
        '* = all elements, :root = the HTML root element.',
      'What are attribute selectors in CSS?':
        'Target elements by attributes: input[type="text"].',
      'What is the difference between :nth-child and :nth-of-type?':
        'Child = position in all children, Of-type = position among same element type.',
    },
    'Box Model & Layout': {
      'What is the CSS box model?': 'Content → Padding → Border → Margin.',
      'Difference between inline, block, and inline-block?':
        'Inline = text flow, Block = full width, Inline-block = inline but keeps box model.',
      'What does overflow do?':
        'Controls extra content (hidden, scroll, auto).',
      'What’s the difference between relative, absolute, fixed, and sticky positioning?':
        'Relative = offset in flow, Absolute = positioned relative to parent, Fixed = viewport, Sticky = scroll-aware.',
      'What’s the difference between visibility: hidden and display: none?':
        'Hidden = takes space but invisible, None = removed completely.',
    },
    Flexbox: {
      'What is Flexbox?': 'Layout model for aligning/distributing space in 1D.',
      'What does justify-content do?': 'Aligns items horizontally (main axis).',
      'What does align-items do?': 'Aligns items vertically (cross axis).',
      'Difference between align-items and align-self?':
        'Items = all children, Self = individual child.',
      'What’s the difference between flex-grow, flex-shrink, and flex-basis?':
        'Grow = expansion, Shrink = contraction, Basis = starting size.',
    },
    Grid: {
      'What is CSS Grid?': '2D layout system with rows and columns.',
      'Difference between grid and flexbox?':
        'Grid = 2D (rows + cols), Flexbox = 1D (row or col).',
      'What does grid-template-columns do?': 'Defines column structure.',
      'What’s the difference between fr unit and %?':
        'Fr = fractional free space, % = relative to parent.',
      'What is the difference between auto-fill and auto-fit in grid?':
        'Fill = fill available space with as many tracks as possible, Fit = same but collapses empty ones.',
    },
    'Colors & Backgrounds': {
      'What are CSS color formats?': 'Named, HEX, RGB, RGBA, HSL, HSLA.',
      'What is the difference between opacity and rgba?':
        'Opacity = whole element, RGBA = only color transparency.',
      'What does background-size: cover do?':
        'Covers container completely, may crop.',
      'Difference between background-attachment: fixed and scroll?':
        'Fixed = background doesn’t move, Scroll = background moves with page.',
      'What is the difference between linear and radial gradients?':
        'Linear = in a line, Radial = from a center point.',
    },
    Typography: {
      'What is the difference between relative (em, rem) and absolute (px) font sizes?':
        'Relative = scalable, Absolute = fixed.',
      'What’s the difference between serif and sans-serif fonts?':
        'Serif = decorative edges, Sans-serif = clean/simple.',
      'What does line-height control?': 'Vertical spacing between lines.',
      'What’s the difference between text-transform and font-variant?':
        'Transform = uppercase/lowercase/capitalize, Variant = small caps.',
      'What’s the difference between letter-spacing and word-spacing?':
        'Letter = spacing between characters, Word = spacing between words.',
    },
    'Responsive Design': {
      'What are media queries?':
        'Apply styles based on device width/height/etc.',
      'What’s the difference between min-width and max-width queries?':
        'Min = applies above threshold, Max = applies below.',
      'What’s the difference between relative units (em/rem) vs media queries?':
        'Units = scalable typography/layout, Queries = adaptive rules.',
      'What are CSS breakpoints?':
        'Defined widths where design changes for devices.',
      'What is mobile-first design?':
        'Start with small screens, scale up with min-width queries.',
    },
    'Advanced & Performance': {
      'What are CSS variables?':
        'Reusable custom properties (--primary-color).',
      'What’s the difference between inline styles and external CSS in terms of performance?':
        'Inline = quick but unmaintainable, External = cached and scalable.',
      'What is critical CSS?':
        'Essential styles loaded first for faster rendering.',
      'What is the difference between relative imports and absolute imports in CSS?':
        'Relative = based on current file, Absolute = from root.',
      'What’s the difference between transition and animation?':
        'Transition = changes between states, Animation = keyframes for continuous changes.',
    },
    'Practical & Security': {
      'What is a CSS reset?': 'Resets default browser styles for consistency.',
      'What’s the difference between inline SVG and background-image SVG?':
        'Inline = styleable via CSS/JS, Background = decorative only.',
      'What is Z-index?': 'Controls stacking order of elements.',
      'What are pseudo-elements?':
        '::before, ::after – insert content before/after element content.',
      'What’s the difference between CSS and SCSS?':
        'SCSS = CSS preprocessor with variables, nesting, mixins.',
    },
  },
  'JavaScript CORE': {
    '🔥 Top 50 JavaScript Core Q&A (Simple + Industry Standard)': '',
    Basics: {
      'What is JavaScript?':
        'A programming language that adds interactivity to web pages.',
      'Is JavaScript compiled or interpreted?':
        'Interpreted (JIT compiled by modern engines like V8).',
      'What is the difference between let, const, and var?':
        'var = function-scoped, let = block-scoped, const = block-scoped + immutable binding.',
      'What are primitive data types in JavaScript?':
        'String, Number, Boolean, Null, Undefined, Symbol, BigInt.',
      'What is the difference between null and undefined?':
        'Undefined = declared but not assigned, Null = intentional empty value.',
    },
    'Operators & Type Conversion': {
      'What’s the difference between == and ===?':
        '== = loose equality (type conversion), === = strict (no conversion).',
      'What is type coercion?':
        'Automatic conversion of one type to another during operations.',
      'What does typeof null return?': 'object (a known JavaScript quirk).',
      'What are truthy and falsy values?':
        'Falsy: false, 0, "", null, undefined, NaN. Everything else = truthy.',
      'What is the difference between ++x and x++?':
        '++x = increments first, x++ = increments after returning.',
    },
    Functions: {
      'What is the difference between function declaration and function expression?':
        'Declaration = hoisted, Expression = not hoisted.',
      'What are arrow functions?':
        'Short syntax functions without their own this.',
      'What is the difference between normal functions and arrow functions?':
        'Arrow functions don’t have this, arguments, or new binding.',
      'What is a callback function?':
        'A function passed as an argument to another function.',
      'What is a higher-order function?':
        'A function that takes/returns other functions.',
    },
    'Scope & Closures': {
      'What is scope in JavaScript?':
        'The context where variables are accessible (global, function, block).',
      'What is lexical scope?':
        'Inner functions access variables from outer scope.',
      'What is a closure?':
        'A function that remembers variables from its outer scope even after scope ends.',
      'What is hoisting?':
        'JavaScript moves declarations to the top before execution.',
      'What’s the difference between global scope and local scope?':
        'Global = accessible everywhere, Local = only inside function/block.',
    },
    'Objects & Arrays': {
      'What are objects in JavaScript?':
        'Key-value pairs for storing data and methods.',
      'What is the difference between dot notation and bracket notation?':
        'Dot = obj.key, Bracket = obj["key"] (useful for dynamic keys).',
      'How do you clone an object?':
        'Shallow: Object.assign({}, obj) or {...obj}. Deep: structuredClone(obj).',
      'What are arrays in JavaScript?': 'Ordered, index-based collections.',
      'Difference between map and forEach?':
        'map returns a new array, forEach doesn’t.',
      'What’s the difference between filter and find?':
        'Filter = all matches, Find = first match.',
      'What does reduce do?':
        'Reduces array to a single value (sum, product, etc.).',
      'What is destructuring in JavaScript?':
        'Extracting values from objects/arrays into variables.',
      'What are rest and spread operators (...)?':
        'Rest = collect arguments, Spread = expand values.',
      'What is the difference between shallow copy and deep copy?':
        'Shallow = only top-level copy, Deep = full nested copy.',
    },
    'Prototypes & OOP': {
      'What is prototypal inheritance?':
        'Objects inherit properties/methods from other objects via prototype chain.',
      'What does Object.create() do?':
        'Creates a new object with a given prototype.',
      'What is the difference between class and prototype?':
        'Class = syntactic sugar, Prototype = underlying inheritance system.',
      'What is the this keyword in JavaScript?':
        'Refers to the object that is executing the function.',
      'What’s the difference between call, apply, and bind?': {
        Call: 'invoke with args,',
        Apply: 'invoke with array args,',
        Bind: 'returns new function with bound this.',
      },
    },
    'Asynchronous JavaScript': {
      'What is the event loop?':
        'Mechanism handling async tasks, moving callbacks from queue to call stack.',
      'What are promises?':
        'Objects representing eventual completion or failure of async tasks.',
      'What are the states of a Promise?': 'Pending, Fulfilled, Rejected.',
      'What is async/await?':
        'Syntax for writing asynchronous code that looks synchronous.',
      'What’s the difference between microtasks and macrotasks?':
        'Micro = promise callbacks, Macro = setTimeout/setInterval.',
    },
    'Error Handling': {
      'What’s the difference between syntax errors and runtime errors?':
        'Syntax = code invalid, Runtime = occurs during execution.',
      'How do you handle errors in JS?':
        'Using try...catch or .catch() in promises.',
      'What is the difference between throw and return?':
        'Throw = raises an error, Return = exits a function with a value.',
      'What are custom errors?': 'User-defined error objects extending Error.',
      'What is finally used for in error handling?':
        'Executes code regardless of try/catch outcome.',
    },
    'Miscellaneous & ES6+': {
      'What are modules in JavaScript?':
        'Reusable pieces of code (import/export).',
      'What is the difference between default and named exports?':
        'Default = one per file, Named = multiple exports.',
      'What are template literals?':
        'Strings with backticks, support interpolation ${}.',
      'What are Symbols in JavaScript?':
        'Unique, immutable values useful as object keys.',
      'What is BigInt in JavaScript?':
        'A numeric type for arbitrarily large integers.',
    },
  },
  'JAVASCRIPT ADVANCE': {
    'Top 50 Advanced JavaScript Interview Questions & Answers': '',
    'What are closures in JavaScript?':
      'Closures allow a function to access variables from its outer scope even after the outer function has returned.Used in: data privacy, callbacks, currying.',
    'What is the difference between var, let, and const?':
      'var: function-scoped, hoisted, can be re-declared.let: block-scoped, hoisted (TDZ applies), can be reassigned but not re-declared.const: block-scoped, cannot be reassigned.',
    'Explain Event Loop in JavaScript.':
      'It continuously checks the call stack and callback queue (task + microtask queues) to execute async tasks.',
    'Difference between synchronous and asynchronous code?':
      'Sync: Executes line by line, blocking.Async: Uses callbacks, promises, or async/await, non-blocking.',
    'What is hoisting?':
      'JavaScript moves declarations (var, function) to the top of their scope before execution.',
    'What are Promises?':
      'An object representing a future value. States: pending → fulfilled/rejected.',
    'Difference between Promise and async/await?':
      'Promises use .then() / .catch().async/await makes async code look synchronous.',
    'What is the difference between null and undefined?':
      'undefined: variable declared but not assigned.null: intentional absence of a value.',
    'Explain this keyword in JS.':
      'In global scope: refers to window (browser).Inside object: refers to that object.Arrow functions: inherit this from lexical scope.',
    'What are arrow functions?':
      'Short syntax for functions, do not bind their own this, arguments, or super.',
    'What is prototypal inheritance?':
      'Objects inherit properties/methods from other objects via __proto__ or Object.create().',
    'Difference between class and prototype in JS?':
      'Classes are syntactic sugar over prototypal inheritance. Prototypes are the underlying mechanism.',
    '13. Explain shallow copy vs deep copy.':
      'Shallow copy: copies only references of nested objects.',
    'Deep copy: copies values recursively.': {},
    'How to deep clone an object in JS?':
      'structuredClone(obj) (modern) or JSON.parse(JSON.stringify(obj)) (limitations).',
    'Explain currying.':
      'Breaking a function with multiple args into a series of functions, each taking one arg.',
    'What is debouncing?':
      'Ensures a function runs only after a pause in repeated calls (e.g., search box typing).',
    'What is throttling?':
      'Limits a function to run once in a specific time interval (e.g., scroll event).',
    'Explain module systems in JS.':
      'CommonJS (require/module.exports).ES Modules (import/export).',
    'What are generators in JS?':
      'Functions that can pause and resume execution using function* and yield.',
    'What are Symbols in JS?':
      'Unique, immutable primitive values often used as object keys.',
    'Explain WeakMap and WeakSet.':
      'WeakMap: keys must be objects, garbage collected automatically.WeakSet: stores objects, no duplicates, also garbage collected.',
    'What is memoization?': 'Caching function results to improve performance.',
    'What are higher-order functions?':
      'Functions that take other functions as arguments or return them.',
    'Explain difference between map, forEach, filter, and reduce.': {
      map: 'transforms and returns new array.',
      forEach: 'loops, no return.',
      filter: 'returns elements meeting condition.',
      reduce: 'accumulates into a single value.',
    },
    'What is event delegation?':
      'Attaching a single event listener on a parent element to handle events on child elements.',
    'What is call, apply, and bind?': {
      call: 'calls function with arguments individually.',
      apply: 'calls with array of args.',
      bind: 'returns a new function with this set.',
    },
    'Difference between stack and heap in JS?':
      'Stack: stores primitive values.Heap: stores objects, functions, reference types.',
    'Explain async vs defer in script tags.': {
      async: 'loads and executes script as soon as ready (non-blocking).',
      defer: 'loads script but executes after HTML parsing.',
    },
    'What is a polyfill?':
      'Code that implements newer JS features in older browsers.',
    'What is the Temporal Dead Zone (TDZ)?':
      'Period between hoisting and initialization of let/const where accessing them throws an error.',
    'What is tail call optimization?':
      'Calling a function as the last action so stack frames can be reused (not widely supported).',
    'Difference between shallow equality and deep equality?': {
      Shallow: 'checks references.',
      Deep: 'checks values recursively.',
    },
    'Explain immutability in JS.':
      'Objects/arrays should not be changed directly; instead create new copies (important in React).',
    'What are pure functions?':
      'Functions that always return the same output for same input and have no side effects.',
    'What is NaN?': '“Not-a-Number” value. Type is number.',
    'Explain microtask vs macrotask.': {
      Microtasks: 'promises, mutation observer.',
      Macrotasks: 'setTimeout, setInterval, I/O.',
    },
    'What is dynamic typing in JS?':
      'Variables can hold different types at runtime.',
    'Explain difference between deep freeze and freeze.': {
      'Object.freeze': 'prevents modifications at the top level',
      'Deep freeze': 'recursively freezes nested objects.',
    },
    'What is service worker in JS?':
      'Background script enabling offline caching, push notifications, and PWA support.',
    'Explain optional chaining (.?) ':
      'Safely accesses nested properties without throwing an error if undefined/null.',
    'What is nullish coalescing (??)?':
      'Returns the right-hand value only if the left-hand is null or undefined.',
    'What are private fields in classes?':
      'Fields prefixed with #, accessible only inside the class.',
    'Explain destructuring.':
      'Extracting values from arrays/objects into variables in a clean way.',
    'What is rest and spread operator?': {
      'Rest (...args)': 'collects multiple elements.',
      'Spread (...arr)': 'expands elements.',
    },

    'What is a WeakRef?':
      'A weak reference to an object that doesn’t prevent garbage collection.',
    'What is Intl in JavaScript?':
      'Internationalization API for dates, numbers, currencies, locales.',
    'Difference between shallow and deep comparison in arrays/objects?': {
      Shallow: 'compares references.',
      Deep: 'compares values element by element.',
    },
    'Explain BigInt in JS.':
      'A primitive type for integers larger than Number.MAX_SAFE_INTEGER.',
    'What is a Proxy in JS?':
      'Wrapper object to intercept operations (get, set, etc.) on another object.',
    'Explain Reflect API.':
      'Provides methods for object manipulation (like Reflect.get, Reflect.set) used with proxies.',
  },
  'React.JS': {
    'Top 50 React.js Interview Questions & Answers': '',
    'What is React?':
      'A JavaScript library for building user interfaces using components.',
    'What are components in React?': {
      "defination": 'Reusable UI pieces. Two types',
      "Functional": 'preferred, with hooks',
      "Class": 'older, less common now).',
    },
    'What are props in React?': 'Inputs to components, read-only.',
    'What is state in React?':
      'Data that changes over time within a component.',
    'What is JSX?':
      'JavaScript + XML-like syntax that compiles to React.createElement().',
    'Difference between controlled and uncontrolled components?': {
      'Controlled ': ' form values managed by React state.',
      Uncontrolled: 'managed by DOM via ref.',
    },
    'What is the Virtual DOM?':
      'An in-memory representation of the DOM that React uses for efficient UI updates.',
    'How does reconciliation work?':
      'React compares new virtual DOM with the old one (diffing) and updates only the changed parts.',
    'What are React hooks?':
      'Functions that let you use state and lifecycle in functional components.',
    'What is useState hook?': 'Manages local component state.',
    'What is useEffect hook?':
      'Handles side effects (fetching, subscriptions, DOM manipulation).',
    'Difference between useEffect and useLayoutEffect?': {
      useEffect: 'runs after paint.',
      useLayoutEffect: 'runs before paint (blocking).',
    },
    'What is useContext?': 'Provides access to context without prop drilling.',
    'What is React Context API?':
      'A way to share data across the component tree without passing props manually.',
    'What is useReducer?': 'Alternative to useState for complex state logic.',
    'What is useMemo?': 'Memoizes expensive calculations between renders.',
    'What is useCallback?':
      'Memoizes function references to avoid unnecessary re-renders.',
    'What is React.memo?':
      'A higher-order component that memoizes functional components.',
    'What is key in React lists?':
      'Unique identifier for list items to optimize rendering.',
    'What is lifting state up?':
      'Moving state to the nearest common ancestor to share between components.',
    'Difference between props and state?': {
      Props: 'external, immutable.',
      State: 'internal, mutable.',
    },
    'What is prop drilling?':
      'Passing props through multiple layers unnecessarily.',
    'How to avoid prop drilling?': 'Use Context API, Redux, or Zustand.',
    'What are fragments in React?':
      '<></> wrapper that groups children without extra DOM node.',
    'What is React Portal?':
      'Renders children into a DOM node outside the parent hierarchy.',
    'What is error boundary?':
      'A React component that catches runtime errors in child components.',
    'What is React StrictMode?':
      'Development tool that highlights potential issues (double invokes effects, warns on unsafe lifecycles).',
    'What is hydration in React?':
      'Attaching event listeners to server-rendered HTML.',
    'Difference between SSR, SSG, and CSR?': {
      SSR: 'render on server per request.',
      SSG: 'render at build time.',
      CSR: 'render fully in browser.',
    },
    'What is Next.js?':
      'A React framework with SSR, SSG, routing, API routes, and optimizations.',
    'What is Redux?':
      'A predictable state management library (store, actions, reducers).',
    'What is Redux Toolkit?':
      'Simplified way to manage Redux with less boilerplate.',
    'Difference between Redux and Context API?': {
      Redux: 'centralized, middleware, debugging tools.',
      Context: 'simple, no middleware, less scalable.',
    },
    'What is useRef?': 'Stores mutable values that don’t trigger re-renders.',
    'Difference between useRef and createRef?': {
      useRef: 'persists across renders.',
      createRef: 'new ref each render.',
    },
    'What is React Fiber?':
      'The new reconciliation engine that enables concurrent rendering.',
    'What is concurrent mode?':
      'React’s ability to interrupt rendering to prioritize urgent updates.',
    'What is Suspense in React?':
      'A feature to show fallback UI while waiting for async data.',
    'What is lazy loading in React?':
      'Loading components only when needed using React.lazy().',
    'What are higher-order components (HOC)?':
      'Functions that take a component and return a new one with added props/logic.',
    'What is render props?':
      'A pattern where a function prop controls component rendering.',
    'What is reconciliation algorithm in React?':
      'The diffing process React uses to update DOM efficiently.',
    'Difference between controlled input and uncontrolled input?': {
      Controlled: 'value bound to React state.',
      Uncontrolled: 'value managed by DOM.',
    },
    'What is the difference between useEffect([]) and useEffect([deps])?': {
      '[]': 'runs once (mount).',
      '[deps]': 'runs when dependencies change.',
    },
    'What is the difference between class and functional components?': {
      Class: 'state via this.state, lifecycle methods.',
      Functional: 'state via hooks, simpler and preferred.',
    },
    'What are custom hooks?': 'Reusable logic built using React hooks.',
    'What is tree shaking in React apps?':
      'Removing unused code during bundling.',
    'What are synthetic events in React?':
      'Cross-browser wrapper around native events for consistency.',
    'What are React keys and why are they important?':
      'Unique identifiers to track elements in lists. Prevents re-renders.',
    'How to optimize performance in React apps?':
      'Memoization (useMemo, useCallback, React.memo) , Code splitting , Virtualization (e.g., react-window),Avoid unnecessary re-renders.',
  },
  'NEXT.JS': {
    'Top 50 Next.js Interview Questions & Answers': '',
    'What is Next.js?':
      'A React framework for production with SSR, SSG, routing, and optimizations.',
    'What is the difference between React and Next.js?': {
      "React": 'UI library only.',
      'Next.js':
        'Full framework with routing, SSR, SSG, API routes, and optimizations.',
    },
    'What are the key features of Next.js?':
      'File-based routing ,SSR, SSG, ISR, API routes,Image optimization,App Router with layouts and server components',
    'Explain the App Router vs Pages Router.': {
      'Pages Router (/pages)': ' older, based on file routing, client-heavy.',
      'App Router (/app)':
        'modern, supports layouts, server components, streaming.',
    },
    'What are Server Components in Next.js?':
      'Components that run on the server by default, reducing JS sent to the client.',
    'What are Client Components in Next.js?':
      'Components that include interactivity ("use client" at top).',
    'What is SSR in Next.js?':
      'Server-Side Rendering: HTML is generated on every request.',
    'What is SSG in Next.js?':
      'Static Site Generation: HTML pre-rendered at build time.',
    'What is ISR in Next.js?':
      'Incremental Static Regeneration: pre-rendered pages updated in the background after a time interval.',
    'What is CSR in Next.js?':
      'Client-Side Rendering: components rendered fully in the browser (similar to React SPA).',
    'How does routing work in Next.js?':
      'File-based: each file in pages/ or app/ is a route.',
    'What are dynamic routes in Next.js?':
      'File names with brackets ([id].js) used for parameterized URLs.',
    'What is a catch-all route?':
      '[...slug].js matches multiple path segments.',
    'How do you create API routes in Next.js?':
      'Inside pages/api/ or app/api/, each file maps to an API endpoint.',
    'What are layouts in Next.js App Router?':
      'Shared UI (e.g., nav, sidebar) that persists across pages.',
    'What are loading UI and error UI in Next.js App Router?':
      'Special files (loading.js, error.js) to handle loading states and errors per route.',
    'What is streaming in Next.js?':
      'Progressively rendering HTML from the server to the client (faster perceived load).',
    'What is middleware in Next.js?':
      'Runs before requests, useful for auth, redirects, logging.',
    'Where do you define middleware?':
      'middleware.js in the root of the project.',
    'What is the difference between getStaticProps, getServerSideProps, and getStaticPaths?':
      {
        "getStaticProps": 'SSG.',
        "getServerSideProps": 'SSR.',
        "getStaticPaths": 'dynamic SSG pages.',
      },

    'What replaces data fetching functions in the App Router?':
      'Async server components and fetch() with caching options.',
    'What caching strategies are available in Next.js?':
      'force-cache (default),no-store,revalidate: x for ISR',
    'What is the difference between fetch in Next.js vs normal fetch?':
      'Next.js fetch is enhanced with caching and revalidation.',
    'What is the next/image component?':
      'Optimized image component with lazy loading, resizing, WebP support.',
    'What is the next/link component?':
      'Client-side navigation between routes with prefetching.',
    'What is prefetching in Next.js?':
      'Next.js automatically fetches data for linked pages in the background.',
    'How do you handle environment variables in Next.js?':
      '.env.local for local dev. Variables prefixed with NEXT_PUBLIC_ are exposed to client.',
    'What is the difference between static and dynamic rendering?': {
      "Static": 'cached, reused.',
      "Dynamic": 'generated per request.',
    },
    'What is the difference between Edge and Node.js runtime in Next.js?':
      'Edge: faster, runs on V8 isolates, no full Node APIs.Node.js: full Node.js runtime support.',
    'How do you add metadata (SEO) in Next.js App Router?':
      'Use export const metadata = { title, description } in page/layout.',
    'What is the difference between _app.js and layouts in App Router?':
      '_app.js: used in Pages Router.Layouts: App Router’s replacement, nested and persistent.',
    'What is _document.js used for?':
      'Customize initial HTML structure (only in Pages Router).',
    'What is a static export in Next.js?':
      'Export app as static HTML using next export.',
    'What are the benefits of using Next.js over CRA?':
      'SSR/SSG Better performance,Built-in routing,SEO-friendly',
    'How does Next.js handle internationalization (i18n)?':
      'Built-in i18n support in next.config.js.',
    'What is the difference between API routes and external APIs in Next.js?':
      'API routes: built-in backend.External APIs: third-party or your own backend.',
    'What is static site regeneration flow?':
      'Serve cached page → rebuild in background → update cache.',
    'What is ISR revalidate?':
      'revalidate: 60 → re-generates the page every 60 seconds.',
    'What is NextAuth.js?':
      'Authentication library for Next.js (supports OAuth, credentials, JWT).',
    'How do you handle authentication in Next.js?':
      'Middleware for route protection.NextAuth.js for full solution.JWTs or sessions.',
    'What is a fallback in getStaticPaths?': {
      "purpose": 'Controls behavior for non-generated paths:',
      "true": 'generate on-demand.',
      "false": '404.',
      "blocking": 'SSR until built.',
    },
    'How does Next.js optimize performance automatically?':'Automatic code splitting,Prefetching,Server components',
    'What is dynamic import in Next.js?':'next/dynamic loads components only when needed (code splitting).',
    'What is API route handler in App Router?':'app/api/route.js with GET, POST, etc. functions.',
    'How to deploy Next.js apps?': 'Vercel (native),Other platforms: Netlify, AWS, DigitalOcean, Docker.',
    'What is the difference between Vercel and self-hosting Next.js?':'Vercel: seamless deployment, edge functions.Self-host: more control, manual setup.',
    'What are Next.js middlewares use cases?': 'Auth checks,Geo-based redirects,A/B testing',
    'How do you secure API routes in Next.js?':'Auth checks (NextAuth, JWTs),Middleware validation,Rate limiting.',
    'What is Turbopack in Next.js?':'Next-gen bundler (faster than Webpack) being integrated into Next.js.',
    'How do you optimize SEO in Next.js?': 'Metadata API,SSR for dynamic content,Sitemap + robots.txt',
  },
  'Node.js': {
    'Top 50 Node.js Interview Questions & Answers':"",
    'What is Node.js?':'A runtime built on Chrome’s V8 engine that lets you run JavaScript outside the browser.',
    'Why use Node.js?': 'Non-blocking I/O, Single-threaded but scalable,Huge npm ecosystem,Is Node.js single-threaded?,Yes, but uses an event loop and worker threads for async tasks.',
    'What is the Event Loop in Node.js?':'A mechanism that handles async callbacks in phases (timers, I/O, microtasks).',
    'Difference between blocking and non-blocking code?':"Blocking: waits until task finishes, Non-blocking: initiates task and continues ", 
   "What are Node.js global objects?": "__dirname, __filename, process, Buffer, setTimeout, etc.",
  "What is npm?": "Node Package Manager — installs and manages dependencies.",
  "Difference between npm and npx?": "npm installs packages, npx executes binaries without global install.",
    "What is CommonJS vs ES Modules in Node.js?": "CommonJS: require/module.exports.ESM:import/export.",
    "How do you create a simple server in Node.js?": "Using http module, const http = require('http'); http.createServer((req,res)=>res.end('Hello')).listen(3000); ",
    "What are streams in Node.js?": "Continuous data flow objects, Readable, Writable, Duplex, Transform",
    'What is the difference between Buffer and Stream?':'Buffer: loads whole data in memory,Stream:processes data chunk by chunk.',
    'What is middleware in Node.js?':
      'Functions with (req, res, next) signature, commonly in Express.',
    'What is the purpose of process object?':
      'Gives info about the current Node.js process (env, pid, exit).',
    'How to handle environment variables in Node.js?':
      'Using process.env and .env files (via dotenv).',
    'What is the difference between synchronous and asynchronous functions?':'Sync: blocks event loop.,Async: non-blocking via callbacks, promises, async/await.',
    'What is callback hell?':
      'Nested callbacks making code unreadable. Solved by Promises/async-await.',
    'What are worker threads in Node.js?':
      'Enable running JavaScript in parallel on multiple threads.',
    'What is clustering in Node.js?':
      'Allows running multiple Node.js processes to utilize multi-core CPUs.',
    'What is the difference between process.nextTick() and setImmediate()?':
      'process.nextTick(): runs before next event loop iteration ,setImmediate(): runs after the current event loop phase.',
    'What are microtasks in Node.js?':
      'High-priority tasks (Promises, process.nextTick) executed before other phases.',
    'What are child processes in Node.js?':
      'Used to run external programs or scripts (spawn, exec, fork).',
    'What is the difference between spawn and exec?':
      'spawn: streams output.exec: buffers output in memory.',
    'What is REPL in Node.js?':
      'Read-Eval-Print Loop — interactive console for Node.js.',
    'What is the difference between require and import?':
      'require: CommonJS, synchronous. import: ES Modules, async, modern.',
    'What is the difference between package.json and package-lock.json?':
      'package.json: metadata + dependencies. package-lock.json: exact dependency versions.',
    'What is semantic versioning in npm?': 'Version format: major.minor.patch.',
    'How do you handle errors in Node.js?': 'Try/catch, Error-first callbacks,Promise .catch()',
    'What is the difference between process.exit() and process.kill()?':
      'process.exit(): terminates current process, process.kill(): sends a signal to terminate another process.',
    'What are built-in Node.js modules?': 'Examples: http, fs, path, url, events, crypto, os.',
    'What is the EventEmitter in Node.js?': 'A class that handles events using .on() and .emit().',
    'What is the difference between readFile and createReadStream?': 'readFile: loads entire file into memory. createReadStream: reads file chunk by chunk.',
    'How do you prevent blocking in Node.js?':'Use async functions, worker threads, clustering.',
    'What are timers in Node.js?': 'setTimeout, setInterval, setImmediate.',
    'What is middleware vs endpoint?': 'Middleware: modifies request/response and passes control.Endpoint: final request handler.',
    'What is the difference between HTTP and HTTPS in Node.js?':
      "HTTP: unsecured.HTTPS: secured with TLS/SSL (https module).",
    'What is JWT in Node.js apps?':'JSON Web Tokens used for authentication.',
    'What is CORS in Node.js?':'Cross-Origin Resource Sharing — controls access to resources from different origins.',
    'What is the difference between monolithic and microservices architecture?': 'Monolithic: single codebase. Microservices: independent services communicating via APIs.',
    'What is PM2 in Node.js?':
      'A process manager to keep apps alive, restart on crash, load balance.',
    'What is Nodemon?':
      'A dev tool that restarts Node.js automatically when files change.',
    'What are Node.js security best practices?': 'Use HTTPS,Validate input, Avoid eval() , Use Helmet , Rate limiting',
    'What is async/await in Node.js?': 'Syntactic sugar for promises, makes async code look synchronous.',
    'What is a memory leak in Node.js?':
      'When unused memory is not released, often caused by global variables or unclosed resources.',
    'What is Garbage Collection in Node.js?': 'Automatic memory cleanup done by V8 engine.',
    'What is the difference between process and thread?':'Process: independent execution with memory. Thread: lightweight unit inside a process.',
    'What is the difference between synchronous and asynchronous logging in Node.js?':
      'Synchronous logging blocks code execution until complete, while asynchronous logging writes logs in the background without blocking.',
    'What is libuv in Node.js?':
      'A C library providing event loop, async I/O, and thread pool.',
    'What is the difference between REST API and GraphQL in Node.js?':
      'REST: fixed endpoints, multiple requests.GraphQL: single endpoint, flexible queries.',
    'How do you scale a Node.js application?': 'Clustering, Load balancing , Microservices , Caching (Redis)',
  },
  'Express.js': {
    '🚀 Top 50 Express.js Interview Questions & Answers': "",
    'What is Express.js?':
      'A fast, minimal web framework for Node.js to build APIs and web apps.',
    'Why use Express.js?': 'Simplifies HTTP handling, Middleware support , Routing system , Works great with Node.js',
    'How do you install Express.js?': 'npm install express',
    'How to create a basic Express server?': "const express = require('express'); const app = express();  app.get('/'(req,res)=>res.send('Hello'));  app.listen(3000); ",
 'What are middleware functions in Express.js?': 'Functions with (req, res, next) that process requests before final response.',
    'Types of middleware in Express.js?': 'Application-level , Router-level ,  Built-in , Error-handling , Third-party ',
    'What is the difference between app.use() and app.get()?':
      'app.use(): applies middleware for all routes.app.get(): handles only GET requests at a specific path.',
    'How do you handle JSON in Express.js?': 'app.use(express.json());',
    'How do you serve static files in Express.js?':
      "app.use(express.static('public'));",
    'What is Router in Express.js?':
      "A mini Express app for grouping related routes., const router = express.Router(); , router.get('/users', ()=>{}); , app.use('/api', router); ",
    'What is the difference between req.params and req.query?':
      'req.params: URL path variables (/user/:id), req.query: URL query string (?id=123).',
    'What is the difference between PUT and PATCH?':'PUT: replaces full resource.PATCH: updates partially.',
    'How do you redirect in Express.js?': "res.redirect('/login');",
    'What is res.locals in Express.js?':
      'An object to pass data to views or middleware in the current request.',
    'How do you send files in Express.js?':
      "res.sendFile('/path/to/file');",
    'How do you handle 404 errors in Express.js?':
      'app.use((req,res)=>res.status(404).send("Not Found"));',
    'How do you handle errors globally in Express.js?': 
  'Use error-handling middleware: app.use((err, req, res, next) => { res.status(500).send(err.message); });',
    'What is the order of middleware execution?':
      'Order matters — executed in the sequence they are declared.',
    'How do you handle form data in Express.js?':
      'app.use(express.urlencoded({extended:true}));',
    'How do you handle file uploads in Express.js?':
      'Using multer middleware.',
    'What is Helmet in Express.js?':
      'Middleware for securing apps by setting HTTP headers.',
    'What is CORS in Express.js?':
      'Cross-Origin Resource Sharing — enabled using cors package.',
    'How to enable CORS in Express.js?': "const cors = require('cors'); , app.use(cors());",
    'What is the difference between app.listen() and app.use()?': 'app.listen(): starts the server. app.use(): mounts middleware/routes.',
    'How do you set cookies in Express.js?': "Using cookie-parser middleware res.cookie('token', '12345');",
    'How do you clear cookies?': "res.clearCookie('token');",
    'How do you manage sessions in Express.js?':
      'Using express-session middleware.',
    'What template engines work with Express.js?': 'EJS, Pug, Handlebars.',
    'How do you use EJS with Express.js?': "app.set('view engine', 'ejs');",
    'How do you send JSON response in Express.js?':
      'res.json({success:true});',
    'What are HTTP methods supported in Express.js?':
      'GET, POST, PUT, PATCH, DELETE, OPTIONS.',
    'What is app.all() in Express.js?':
      'Handles all HTTP methods for a route.',
    'What is difference between next() and return next()?':
      'next(): passes control to next middleware. , return next(): ensures no code runs after calling next().',
    'What is difference between synchronous and asynchronous middleware?':
      'Sync: calls next() directly., Async: uses Promises/async-await, must handle errors.',
    'What is app.route()?': 'A way to chain multiple HTTP methods on the same route.',
    'What is the difference between res.send() and res.json()?':
      'res.send(): sends any type , res.json(): formats response as JSON.',
    'How do you handle file downloads in Express.js?': "res.download('/path/file.pdf');",
    'How do you trust reverse proxies in Express.js?': "app.set('trust proxy', true);",
    'How do you configure environment variables in Express.js?': 'Using dotenv with process.env.',
    'How do you improve security in Express.js apps?': 'Use Helmet , Sanitize input , Avoid eval() ,  HTTPS , Rate limiting',
    'What is rate limiting in Express.js?':
      'Controlling request rate with express-rate-limit.',
    'What is Morgan in Express.js?':
      'Logging middleware for HTTP requests.',
    'What is compression in Express.js?':
      'Middleware (compression) that reduces response size with Gzip.',
    'How do you organize routes in large Express.js apps?':
      'Use express.Router() in separate files.',
    'How do you handle async errors in Express.js?':
      'Wrap in try/catch or use libraries like express-async-errors.',
    'What is the difference between Express.js and Koa.js?':
      'Express: middleware-based, more mature , Koa: newer, modular, async-first.',
    'What is the difference between Express.js and Nest.js?':
      'Express: minimal, unopinionated , Nest.js: opinionated, TypeScript-first, structured.',
    'What is the difference between REST API and GraphQL in Express.js?':
      'REST: fixed endpoints , GraphQL: flexible queries, single endpoint.',
    'What is the role of status codes in Express.js?':
      'Tell client about response (200 OK, 400 Bad Request, 500 Server Error).',
    'How do you scale Express.js applications?': 'Clustering (PM2) , Load balancing , Caching (Redis),Breaking into microservices',
  },
  MongoDB: {
    'Top 50 MongoDB Interview Questions & Answers': "",
    'What is MongoDB?':
      'A NoSQL, document-oriented database that stores data in JSON-like BSON format.',
    'Why use MongoDB?': 'Flexible schema,Scales horizontally,High performance for reads/writes',
    'What is BSON?':
      'Binary JSON format MongoDB uses to store documents (supports extra types like dates, ObjectId).',
    'What is a collection in MongoDB?':
      'A group of documents (similar to a table in SQL).',
    'What is a document in MongoDB?':
      'A single record stored as a JSON-like object.',
    'What is an ObjectId?':
      'A unique 12-byte ID MongoDB assigns by default to each document.',
    'Difference between SQL and MongoDB?':'SQL: structured, tables, fixed schema.MongoDB: flexible, collections, dynamic schema.',
    'How do you create a database in MongoDB?': 'use myDatabase',
    'How do you create a collection in MongoDB?':
      'db.createCollection("users")',
    'How do you insert a document in MongoDB?':
      'db.users.insertOne({name:"Ali"})',
    'Insert multiple documents?':
      'db.users.insertMany([{name:"ismaeel"}, {name:"Raoof"}])',
    'How to query documents in MongoDB?': 'db.users.find({age:25})',
    'How to query all documents?': 'db.users.find({})',
    'How to update one document?':
      'db.users.updateOne({name:"Raoof"}, {$set:{age:30}})',
    'How to update many documents?':
      'db.users.updateMany({}, {$set:{verified:true}})',
    'How to delete one document?': 'db.users.deleteOne({name:"Ismaeel"})',
    'How to delete many documents?': 'db.users.deleteMany({active:false})',
    'Difference between findOne() and find()?':
      'findOne(): returns a single document.,find(): returns a cursor to multiple documents.',
    'What is an index in MongoDB?': 'Data structure to speed up queries.',
    'How to create an index?': 'db.users.createIndex({name:1})',
    'What is a compound index?': 'Index on multiple fields ,   db.users.createIndex({name:1, age:-1})',
    'What is the default index in MongoDB?': 'The _id field.',
    'What is the aggregation framework in MongoDB?':
      'A way to process data using stages like $match, $group, $sort.',
    'Example of aggregation pipeline?': 'db.orders.aggregate([{ $match: { status: "delivered" } }, { $group: { _id: "$customerId", total: { $sum: "$amount" } } }]);',
    'What is sharding in MongoDB?':
      'Horizontal scaling by splitting data across multiple servers.',
    'What is a replica set?':
      'A group of MongoDB servers for redundancy and high availability.',
    'What is the primary node in a replica set?':
      'The main node that accepts writes.',
    'What are secondary nodes?':
      'Nodes that replicate from the primary and serve read queries.',
    'What is failover in MongoDB?':
      'Automatic election of a new primary if the old one fails.',
    'What is capped collection?':
      'Fixed-size collection that overwrites oldest data when full.',
    'What is a TTL index?':
      'Index that automatically deletes documents after a set time.',
    'How to create a TTL index?':
      'db.sessions.createIndex({createdAt:1},{expireAfterSeconds:3600})',
    'What is difference between $lookup and $unwind?':'$lookup: performs join between collections, $unwind: deconstructs arrays into multiple documents.',
    'What is GridFS?': 'A way to store large files (>16MB) in MongoDB.',
    'What is the MongoDB Atlas?':
      'Cloud-based MongoDB service by MongoDB Inc.',
   'How do you connect MongoDB in Node.js?': "const { MongoClient } = require('mongodb'); MongoClient.connect('mongodb://localhost:27017');",
    '37. Difference between MongoDB and Redis?': 'MongoDB: document database. Redis: in-memory key-value store (fast cache).',
    'What is the $set operator in MongoDB?': 'Updates specific fields ,{$set:{status:"active"}}',
    'What is the $inc operator?': 'Increments a number , {$inc:{age:1}}',
    'What is the $push operator?': 'Adds an item to an array , {$push:{tags:"new"}}',
    'What is the $pull operator?': 'Removes an item from an array , {$pull:{tags:"old"}}',
    'What is the $in operator?': 'Matches if field value is in an array ,    db.users.find({age:{$in:[20,25,30]}})',
    'What is the $regex operator?': 'Search with regex , db.users.find({name:/^A/})',
    'What is the difference between $and, $or in MongoDB?': '$and: matches all conditions,    $or: matches any condition' ,
    'How to sort results in MongoDB?': 'db.users.find().sort({age:-1})',
    'How to limit results in MongoDB?': 'db.users.find().limit(5)',
    'What is difference between skip() and limit()?':'skip(n): skips n documents ,limit(n): returns only n documents.',
    'How to check current database in MongoDB?': 'db',
    'How to show collections in a database?': 'show collections',
    'How to show all databases?': 'show dbs',
  },
  'WEB Performance': {
    'Top 50 Web Performance Interview Questions & Answers': "",
    'What is web performance optimization?': 'Improving website speed, responsiveness, and efficiency for better UX and SEO.',
    'Why does web performance matter?': 'Better user experience , Higher SEO ranking , Increased conversions , Lower bounce rate',
    'What are Core Web Vitals?': 'Google’s key performance metrics , LCP (Largest Contentful Paint), FID (First Input Delay) , CLS (Cumulative Layout Shift)',
    'What is Largest Contentful Paint (LCP)?':
      'Time taken for the largest visible element to load.',
    'What is First Input Delay (FID)?':
      'Time between user interaction and browser response.',
    'What is Cumulative Layout Shift (CLS)?':
      'Measures unexpected layout shifts while page loads.',
    'How do you measure web performance?': 'Lighthouse , Chrome DevTools , WebPageTest ,    GTMetrix',
    'What is the difference between load time and time to interactive?':
      'Load time: when page resources finish loading , TTI: when page becomes usable',
    'What is critical rendering path?':
      'Steps browser takes to convert HTML, CSS, JS into pixels on screen.',
    'What is render-blocking JavaScript?':
      'JavaScript that delays page rendering until executed.',
    'How to reduce render-blocking JavaScript?': 'Use async or defer , Code splitting ,   Minify JS',
    'What is lazy loading?':
      'Loading images/components only when needed (on scroll).',
    'What is code splitting?':
      'Breaking JavaScript into smaller bundles to load only when required.',
    'What is tree shaking?': 'Removing unused code during bundling.',
    'What is caching in web performance?':
      'Storing files (HTML, CSS, JS, images) locally to reduce re-download.',
    'Types of caching?': 'Browser cache , CDN cache , Service worker cache' ,
  'What is a CDN?':
      'Content Delivery Network that serves assets from servers near the user.',
    'What is preloading in web performance?':
      'Using <link rel="preload"> to load critical resources earlier.',
    'What is prefetching?':
      'Loading resources ahead of time (likely needed soon).',
    'What is difference between preload and prefetch?':
      'Preload: needed immediately , Prefetch: needed later.',
    'What is DNS lookup time?':
      'Time taken to resolve a domain into an IP address.',
    'What is DNS prefetching?':
      'Browser resolves domains before user navigates. , <link rel="dns-prefetchhref="//example.com">',
    'What is HTTP/2 and how does it help performance?': 'Multiplexing requests , Header compression, Server push',
    'What is difference between HTTP/1.1 and HTTP/2?': 'HTTP/1.1: one request per connection , HTTP/2: multiple requests in one connection.',
    'What is HTTP/3 (QUIC)?':
      'Next-gen protocol using UDP for faster, reliable connections.',
    'What is minification?':
      'Removing unnecessary characters from code (spaces, comments).',
    'How to optimize images for web?': 'Use modern formats (WebP, AVIF) , Compression (lossy/lossless) , Responsive images (srcset)',
    'What is responsive image loading?': 'Serving different image sizes based on device screen.',
    'What is a service worker?': 'A script that runs in background, enables caching, offline support.',
    'How do PWAs improve performance?': 'Offline caching , Faster repeat visits, Background sync',
    'What is Time To First Byte (TTFB)?':
      'Time taken for server to send first response.',
    'How to reduce TTFB?': 'Optimize server response , Use CDN , Enable caching ', 
    'What is Gzip compression?':
      'Server-side compression to reduce file size.',
    'What is Brotli compression?':
      'A newer, more efficient compression than Gzip.',
    'How to reduce CSS blocking?': 'Inline critical CSS , Use media queries(media="print") , Minify CSS',
    'What is a critical CSS?':
      'Minimal CSS needed for above-the-fold content.',
    'What are web workers?':
      'Background scripts that run tasks without blocking UI.',
    'What is request batching?':
      'Combining multiple small requests into fewer larger ones.',
    'What is content preconnect?':
      'Establishing early connections to third-party domains , <link rel="preconnect" href="https://fonts.googleapis.com">',
    'What is font-display in web performance?':
      'Controls font loading behavior (swap, block, fallback).',
    'What is FOUC?': 'Flash of Unstyled Content when CSS loads late.',
    'How to avoid FOUC?': 'Preload fonts',
    'What is FCP (First Contentful Paint)?':
      'Time when first text or image is painted.',
    'What is TTI (Time to Interactive)?': 'When page is fully interactive.',
    'How to reduce JavaScript bundle size?': 'Tree shaking , Dynamic imports',
    'What are long tasks in web performance?':
      'JavaScript tasks >50ms that block main thread.',
    'How to avoid long tasks?': 'Split tasks into smaller chunks,Use web workers',
    'What is lazy hydration?':'Delaying React/Vue component hydration until needed.',
    'What is differential serving?':
      'Serving modern JS to modern browsers, legacy JS to old browsers.',
    'What are best practices for web performance?':'Optimize images & fonts,Minify & compress files , Use CDN & caching, Reduce JS/CSS blocking , Monitor with Core Web Vitals'
  },
  'Web Security': {
    'Top 50 Web Security Questions & Answers': "",
    'What is web security?':
      'Protecting websites, applications, and data from attacks, breaches, and misuse.',
    'Why is HTTPS important?':
      'It encrypts communication between client and server, preventing data theft.',
    'What is SSL/TLS?':
      'Protocols that secure communication by encrypting data over the internet.',
    'What is a common web attack?':
      'SQL Injection, XSS, CSRF, Brute Force, and DDoS are the most common.',
    'What is SQL Injection?':
      'An attack where malicious SQL is inserted into queries to access databases.',
    'How do you prevent SQL Injection?':
      'Use parameterized queries or ORM instead of string concatenation.',
    'What is XSS (Cross-Site Scripting)?':
      'Injecting malicious JavaScript into web pages viewed by users.',
    'How do you prevent XSS?':
      'Sanitize input, escape output, and use Content Security Policy (CSP).',
    'What is CSRF (Cross-Site Request Forgery)?':
      'Tricking a logged-in user to perform actions they didn’t intend.',
    'How to prevent CSRF?': 'Use CSRF tokens and SameSite cookies.',
    'What is authentication?':
      'The process of verifying user identity (e.g., login with password).',
    'What is authorization?':
      'The process of deciding what an authenticated user can do.',
    'What is brute force attack?':
      'An attacker tries many password combinations until they succeed.',
    'How to prevent brute force attacks?':
      'Rate limiting, account lockout, and 2FA.',
    'What is 2FA (Two-Factor Authentication)?':
      'An extra security step (e.g., password + OTP or biometric).',
    'What is password hashing?':
      'Converting a password into a one-way secure format.',
    'Which algorithms are used for hashing?':
      'bcrypt, Argon2, PBKDF2 (never MD5 or SHA1).',
    'What is salting in password hashing?':
      'Adding random data to make hashes unique and harder to crack.',
    'What is session hijacking?':
      'Stealing a user’s session cookie to impersonate them.',
    'How to protect against session hijacking?':
      'Use Secure, HttpOnly, SameSite cookies, and regenerate session IDs.',
    'What is CORS?':
      'Cross-Origin Resource Sharing: rules for controlling API access across domains.',
    'What is clickjacking?':
      'Tricking users into clicking hidden elements (e.g., via iframes).',
    'How to prevent clickjacking?':
      'Use X-Frame-Options: DENY or Content Security Policy.',
    'What is a DDoS attack?':
      'Overloading a server with traffic to make it unavailable.',
    'How to defend against DDoS?':
      'Rate limiting, WAFs, CDNs, and scalable infrastructure.',
    'What is a firewall?':
      'A filter that blocks malicious traffic before it reaches servers.',
    'What is a Web Application Firewall (WAF)?':
      'A firewall designed specifically to protect web apps from attacks.',
    'What is input validation?':
      'Checking and sanitizing user input before processing.',
    'Why is principle of least privilege important?':
      'Users and systems should have only the access they need.',
    'What is role-based access control (RBAC)?':
      'Permissions are assigned based on user roles.',
    'What is token-based authentication?':
      'Using JWT or similar tokens instead of sessions for auth.',
    'What is JWT?':
      'JSON Web Token: a secure, compact way to transfer claims between parties.',
    'How to secure JWTs?':
      'Use HTTPS, short expiry, and store in HttpOnly cookies.',
    'What is OAuth?':
      'A framework for secure delegated access (e.g., “Login with Google”).',
    'What is OpenID Connect?':
      'An identity layer built on top of OAuth for user authentication.',
    'What is API key security?':
      'Protecting API keys by not exposing them in client-side code.',
    'What is rate limiting?':
      'Restricting requests to prevent abuse (e.g., too many login attempts).',
    'What is a man-in-the-middle attack (MITM)?':
      'An attacker intercepts communication between client and server.',
    'How to prevent MITM attacks?':
      'Use HTTPS, TLS, and certificate pinning.',
    'What is security logging?':
      'Recording all access and actions to detect suspicious activity.',
    'What is vulnerability scanning?':
      'Automated tools scan for known security weaknesses.',
    'What is penetration testing?':
      'Ethical hackers simulate attacks to find vulnerabilities.',
    'What is OWASP Top 10?':
      'The 10 most critical security risks in web applications.',
    'Why is data encryption important?':
      'Prevents sensitive data from being readable if stolen.',
    'What is end-to-end encryption?':
      'Only sender and receiver can read the data, no one in between.',
    'What is secure coding practice?':
      'Writing code with security in mind from the start.',
    'What is dependency vulnerability?':
      'Insecure libraries or packages in your project.',
    'How to prevent dependency issues?':
      'Regularly update dependencies and use tools like npm audit.',
    'What is zero trust security?':
      'Never trust, always verify — every request is authenticated.',
    'Why is security a continuous process?':
      'Because threats evolve daily; systems must adapt and be updated.',
  },
  'DEV OPS': {
    'Top 50 DevOps Questions & Answers': "",
    'What is DevOps?':
      'A culture and set of practices combining development and operations to deliver software faster and reliably.',
    'Why is DevOps important?':
      'It improves collaboration, speeds up delivery, and increases software quality.',
    'What are key pillars of DevOps?':
      'Collaboration, automation, CI/CD, monitoring, and feedback.',
    'What is CI/CD?':
      'Continuous Integration and Continuous Deployment/Delivery.',
    'What is Continuous Integration (CI)?':
      'Developers frequently merge code into a shared repo with automated tests.',
    'What is Continuous Deployment (CD)?':
      'Code changes automatically move to production after passing tests.',
    'What is a pipeline?':
      'A set of automated steps from code commit to deployment.',
    'What are common CI/CD tools?':
      'Jenkins, GitHub Actions, GitLab CI, CircleCI, Travis CI.',
    'What is Infrastructure as Code (IaC)?':
      'Managing servers and infrastructure through code instead of manual setup.',
    'Examples of IaC tools?': 'Terraform, Ansible, Puppet, Chef.',
    'What is containerization?':
      'Packaging apps with dependencies in isolated environments (containers).',
    'What is Docker?':
      'A tool for building, shipping, and running applications in containers.',
    'What is Kubernetes?':
      'A platform to manage and scale containers automatically.',
    'What is orchestration in DevOps?':
      'Automating deployment, scaling, and management of applications.',
    'What is microservices architecture?':
      'Breaking an app into small, independent services.',
    'What is monitoring in DevOps?':
      'Tracking system health, performance, and errors.',
    'Common monitoring tools?': 'Prometheus, Grafana, Datadog, New Relic.',
    'What is logging in DevOps?':
      'Capturing system and application events for analysis.',
    'What is observability?':
      'Ability to understand the internal state of systems using logs, metrics, and traces.',
    'What is version control in DevOps?':
      'Tracking changes in code (Git is the most common).',
    'What is GitOps?':
      'Managing infrastructure and deployments through Git workflows.',
    'What is blue-green deployment?':
      'Deploying new versions on a separate environment, then switching traffic.',
    'What is canary deployment?':
      'Releasing new features to a small set of users before full rollout.',
    'What is rolling deployment?':
      'Gradually updating instances with the new version.',
    'What is automated testing in DevOps?':
      'Running unit, integration, and e2e tests automatically in pipelines.',
    'Why is automation key in DevOps?':
      'It reduces human error and speeds up delivery.',
    'What is a build server?':
      'A system that compiles, tests, and packages code.',
    'What is artifact management?':
      'Storing built software packages in repositories (e.g., Nexus, Artifactory).',
    'What is configuration management?':
      'Managing system setup and consistency (tools: Ansible, Puppet).',
    'What is secret management?':
      'Storing passwords, keys, and tokens securely.',
    'Tools for secret management?':
      'Vault, AWS Secrets Manager, Kubernetes Secrets.',
    'What is cloud computing in DevOps?':
      'Using services like AWS, Azure, GCP to run infrastructure.',
    'What is serverless in DevOps?':
      'Running code without managing servers (AWS Lambda, GCP Functions).',
    'What is high availability (HA)?':
      'System designed to remain operational with minimal downtime.',
    'What is scalability?':
      'Ability to handle increasing workload by adding resources.',
    'Difference between horizontal and vertical scaling?': 'Horizontal: add more machines ,Vertical: add more power to one machine.',
    'What is load balancing?':
      'Distributing traffic across multiple servers to prevent overload.',
    'What is disaster recovery (DR)?':
      'A plan to restore services after failures or attacks.',
    'What is rollback in DevOps?':
      'Reverting to a previous version if deployment fails.',
    'What is immutability in DevOps?':
      'Never modifying servers — replace them instead (immutable infrastructure).',
    'What is site reliability engineering (SRE)?':
      'A discipline that applies software engineering to operations.',
    'What is SLA, SLO, SLI?': 'SLA: Agreement with customers , SLO: Internal targets ,SLI: Actual measured metrics ',
    'What is shift-left testing?':
      'Testing early in the development cycle.',
    'What is continuous monitoring?':
      'Always watching apps and infrastructure for issues.',
    'What is chaos engineering?':
      'Intentionally breaking systems to test resilience.',
    'What is security in DevOps (DevSecOps)?':
      'Integrating security into every step of DevOps pipelines.',
    'What is policy as code?':
      'Defining security and compliance rules as code.',
    'What is multi-cloud strategy?':
      'Using multiple cloud providers to reduce dependency.',
    'What is hybrid cloud?': 'Mix of on-premises and cloud infrastructure.',
    'Why is DevOps a continuous journey?':
      'Because tools evolve, threats change, and processes can always improve.',
  },
  API: {
    'Top 50 API Development & Security Questions & Answers': "",
    'What is an API?':
      'An interface that lets different systems communicate with each other.',
    'What is REST API?':
      'An API that follows REST principles: stateless, resource-based, uses HTTP methods.',
    'What are common HTTP methods in REST?':
      'GET, POST, PUT, PATCH, DELETE.',
    'What is the difference between PUT and PATCH?': 'PUT: Replaces entire resource.    PATCH: Updates part of a resource.',
    'What is GraphQL?':
      'A query language for APIs that lets clients request exactly what they need.',
    'REST vs GraphQL?': 'REST: Fixed endpoints , GraphQL: Single endpoint, flexible queries.',
    'What is gRPC?':
      'A high-performance API framework using Protocol Buffers and HTTP/2.',
    'What is an endpoint?':
      'A specific URL where an API resource can be accessed.',
    'What is versioning in APIs?':
      'Maintaining multiple versions of APIs to avoid breaking old clients.',
    'How to version an API?':
      'Use URL (/v1/users) or headers (Accept-Version).',
    'What is idempotency?':
      'Same request can be repeated safely (e.g., GET, PUT).',
    'Why should APIs be stateless?':
      'Each request should contain all necessary info — no server memory dependency.',
    'What is pagination in APIs?':
      'Splitting large data sets into smaller pages.',
    'Common pagination methods?':
      'Offset/limit, cursor-based, keyset pagination.',
    'What is rate limiting in APIs?':
      'Restricting the number of requests a client can make.',
    'Why is rate limiting important?':
      'Prevents abuse and protects server resources.',
    'What is API authentication?':
      'Verifying the identity of the client (who you are).',
    'What is API authorization?':
      'Determining what the client can access (what you can do).',
    'What is an API key?':
      'A unique token used to authenticate API requests.',
    'Problem with API keys?':
      'They can be easily leaked if stored in client-side code.',
    'What is OAuth 2.0?':
      'A standard for secure delegated access (e.g., “Sign in with Google”).',
    'What is OpenID Connect?':
      'An identity layer on top of OAuth for authentication.',
    'What is JWT (JSON Web Token)?':
      'A compact, signed token for secure data exchange.',
    'How to secure JWTs?':
      'Use HTTPS, short expiry, and store in HttpOnly cookies.',
    'What is HMAC in APIs?':
      'A method of signing requests using a secret key.',
    'What is CORS in APIs?':
      'Cross-Origin Resource Sharing: rules for cross-domain requests.',
    'How to handle CORS securely?': 'Allow only trusted origins, not *.',
    'What is input validation in APIs?':
      'Checking and sanitizing data before processing requests.',
    'What is API throttling?':
      'Limiting how many requests a client can make per second/minute.',
    'What is IP whitelisting?':
      'Allowing API access only from specific IP addresses.',
    'What is API gateway?':
      'A single entry point that routes, secures, and monitors API calls.',
    'Popular API gateway tools?': 'Kong, Nginx, AWS API Gateway, Apigee.',
    'What is API monitoring?':
      'Tracking performance, uptime, and errors of APIs.',
    'What is API logging?':
      'Recording requests and responses for debugging and security.',
    'Why use HTTPS for APIs?':
      'It encrypts requests and responses, preventing eavesdropping.',
    'What is data encryption at rest vs in transit?': 'At rest: Stored securely (database, files) , In transit: Secured while moving (HTTPS/TLS).',
    'What is API schema validation?':
      'Ensuring request/response match a defined structure (e.g., JSON schema).',
    'What is HATEOAS in REST APIs?':
      'Hypermedia As The Engine Of Application State — linking related actions in responses.',
    'What is SOAP API?':  'An older protocol using XML for structured messaging ',
    '40. SOAP vs REST?': 'SOAP: Heavy, XML, built-in standards. REST: Lightweight, JSON, flexible.',
    'What is API testing?':
      'Validating API correctness, performance, and security.',
    'Popular API testing tools?': 'Postman, Insomnia, Newman, RestAssured.',
    'What is API mocking?':
      'Simulating API responses for testing without backend.',
    'What is API documentation?': 'Detailed guide on how to use an API.',
    'Tools for API documentation?': 'Swagger (OpenAPI), Postman, Redoc.',
    'What is webhooks in APIs?':
      'APIs that push updates to clients instead of polling.',
    'Example of webhook?':
      'Stripe sending payment success events to your server.',
    'What is gRPC security?':
      'Uses TLS for transport security and supports authentication mechanisms.',
    'Why is versioning critical for API security?':
      'Old clients may rely on outdated, less secure endpoints.',
    'Why is API security a continuous process?':
      'Threats evolve; APIs must be updated and monitored regularly.',
  },
  Testing: {
    'Top 50 Testing Questions & Answers': "",
    'What is software testing?':
      'The process of verifying that software works as expected and meets requirements.',
    'Why is testing important?':
      'It prevents bugs, improves reliability, and builds user trust.',
    'What are the main types of testing?':
      'Unit, Integration, End-to-End (E2E), Manual, Automated, Performance, Security.',
    'What is unit testing?':
      'Testing individual pieces of code (like functions) in isolation.',
    'What is integration testing?':
      'Testing how different modules or services work together.',
    'What is end-to-end (E2E) testing?':
      'Testing the entire application flow from start to finish, simulating real user actions.',
    'What is manual testing?':
      'Testing performed by humans without automation tools.',
    'What is automated testing?':
      'Using tools/scripts to run tests automatically.',
    'What is test coverage?':
      'A measure of how much code is tested by automated tests.',
    'Why is 100% test coverage not always practical?':
      'It can waste time; focus on critical paths instead.',
    'What is a test case?':
      'A set of conditions and steps to verify a specific feature.',
    'What is a test suite?': 'A collection of related test cases.',
    'What is TDD (Test-Driven Development)?':
      'Writing tests before writing code.',
    'What is BDD (Behavior-Driven Development)?':
      'Writing tests in natural language that describe behavior (e.g., Cucumber).',
    'Unit vs Integration testing?': 'Unit: tests small pieces , Integration: tests how pieces work together.',
    'Integration vs E2E testing?':
      'Integration: checks interactions between modules , E2E: tests the full user journey.',
    'What is mocking in tests?':
      'Simulating external dependencies (APIs, DB) to isolate tests.',
    'What is stubbing?':
      'Providing predefined responses for function calls.',
    'What is snapshot testing?':
      'Comparing current output (UI/JSON) with a stored version to detect changes.',
    'What is regression testing?':
      'Re-running tests to ensure old features still work after changes.',
    'What is smoke testing?':
      'Quick tests to check if critical features work after deployment.',
    'What is sanity testing?':
      'Narrow checks to ensure a bug fix works without breaking related features.',
    'What is performance testing?':
      'Checking how the system performs under load.',
    'What is load testing?':
      'Testing system behavior under expected user traffic.',
    'What is stress testing?':
      'Testing the system under extreme traffic or usage.',
    'What is acceptance testing?':
      'Validating that software meets business requirements.',
    'What is UAT (User Acceptance Testing)?':
      'Real users test the app before release.',
    'What is cross-browser testing?':
      'Ensuring the app works in different browsers.',
    'What is accessibility testing?':
      'Ensuring the app is usable by people with disabilities.',
    'What is CI/CD testing?':
      'Automated tests run as part of deployment pipelines.',
    'What is flaky test?':
      'A test that sometimes passes, sometimes fails, without code changes.',
    'How to deal with flaky tests?':
      'Stabilize setup, mock dependencies, or rewrite test logic.',
    'What is code coverage threshold?':
      'A minimum required coverage percentage to pass builds.',
    'What is parallel testing?':
      'Running tests simultaneously to speed up execution.',
    'What are common JavaScript test frameworks?':
      'Jest, Mocha, Jasmine, Vitest.',
    'Common E2E testing tools?':
      'Cypress, Playwright, Selenium, Puppeteer.',
    'Common API testing tools?': 'Postman, Newman, RestAssured, Supertest.',
    'Common performance testing tools?': 'JMeter, Locust, k6.',
    'What is continuous testing?':
      'Running automated tests at every stage of development.',
    'What is test automation pyramid?': 'Bottom: Unit tests (most) , Middle: Integration tests , Top: E2E tests (fewest).',
    'Why follow the pyramid?':
      'Faster, cheaper tests at the bottom; fewer slow tests at the top.',
    'What is exploratory testing?':
      'Manual testing without predefined cases, focusing on discovering unknown bugs.',
    'What is static testing?':
      'Checking code, documents, or requirements without execution.',
    'What is dynamic testing?': 'Running the software to find defects.',
    'What is boundary testing?':
      'Testing limits (e.g., max input length, edge cases).',
    'What is data-driven testing?':
      'Running the same test with multiple input sets.',
    'What is test environment?':
      'The setup (hardware, software, DBs) where tests run.',
    'What is CI/CD test gating?':
      'Blocking deployments if critical tests fail.',
    'Why is automation not a silver bullet?':
      'Some tests (UX, usability) still need humans.',
    'Why is testing a continuous process?':
      'Because code changes, features evolve, and bugs never stop.',
  },
  'Cloud Computing': {
    'Top 50 Cloud Computing Interview Questions & Answers': "",
    Basics: {
    'What is cloud computing?':
      'Delivering computing services (servers, storage, databases, networking, software) over the internet.',
    'What are the main cloud models?':
      'Public, Private, Hybrid, and Multi-cloud.',
    'What are the main service types?':
      'IaaS (Infra), PaaS (Platform), SaaS (Software).',
    'What is elasticity in cloud?':
      'Ability to automatically scale resources up or down based on demand.',
    'What is scalability in cloud?':
      'Ability to increase resources to handle growing workload.',
    'Difference between horizontal and vertical scaling?':
      'Horizontal: Adding more machines.',
    'Vertical: Increasing power of a single machine.': {},
    'What is serverless computing?':
      'Running code without managing servers (e.g., AWS Lambda).',
    'What is edge computing?':
      'Processing data closer to where it’s generated for low latency.',
    'What is multi-cloud strategy?':
      'Using multiple cloud providers to avoid vendor lock-in.',
    'What is hybrid cloud?': 'Mix of on-premise and cloud resources.',
    },
    'Cloud Providers': {
    'Top 3 cloud providers?': 'AWS, Microsoft Azure, Google Cloud Platform.',
    'What is AWS EC2?': 'Elastic Compute Cloud – virtual servers in AWS.',
    'What is S3 in AWS?': 'Simple Storage Service – object storage.',
    'What is Azure Functions?': 'Serverless computing service on Azure.',
    'What is Google Cloud Pub/Sub?':
      'Messaging service for event-driven systems.',
    },
    'Storage & Databases': {
    'What is object storage?':
      'Stores data as objects (like files with metadata). Example: S3.',
    'What is block storage?': 'Storage volumes like virtual hard drives.',
    'What is file storage?':
      'Hierarchical storage with folders and files (like NFS, EFS).',
    'What is DynamoDB?': 'AWS NoSQL managed database.',
    'What is Cloud Spanner?': 'Google’s globally distributed SQL database.',
    },
    Networking: {
    'What is VPC?': 'Virtual Private Cloud – isolated network in cloud.',
    'What is a load balancer?': 'Distributes traffic across multiple servers.',
    'What is CDN?':
      'Content Delivery Network – caches content at edge for fast delivery.',
    'What is Direct Connect (AWS)?':
      'Dedicated private network between data center and AWS.',
    'What is Cloudflare used for?':
      'CDN, DDoS protection, and security services.',
    },
    Security: {
    'What is IAM?':
      'Identity and Access Management – controls who can access what.',
    'What is least privilege principle?':
      'Give users the minimum access they need.',
    'What is cloud encryption?':
      'Securing data in transit and at rest with encryption.',
    'What is shared responsibility model?':
      'Cloud provider secures infra, customer secures data & apps.',
    'What is Key Management Service (KMS)?': 'Managed encryption key service.',
    },
    'Cloud Architecture': {
    'What is microservices architecture?':
      'Breaking apps into independent small services.',
    'What is containerization?':
      'Running apps in lightweight, portable environments (e.g., Docker).',
    'What is Kubernetes?': 'Orchestration tool for managing containers.',
    'What is auto-scaling?':
      'Automatically adjusting number of resources based on traffic.',
    'What is high availability?': 'Designing systems to minimize downtime.',
    },
    'Cost & Monitoring': {
    'What is pay-as-you-go model?': 'Pay only for what you use.',
    'What is reserved instance in AWS?':
      'Discounted long-term commitment for EC2.',
    'What is spot instance?':
      'Cheap, unused compute capacity available on demand.',
    'What is CloudWatch?': 'AWS monitoring and logging service.',
    'What is FinOps?': 'Financial operations for managing cloud costs.',
    },
    Advanced: {
    'What is Infrastructure as Code (IaC)?':
      'Managing infra using code (Terraform, CloudFormation).',
    'What is a service mesh?':
      'Manages service-to-service communication in microservices.',
    'What is blue-green deployment?':
      'Two environments (blue=current, green=new). Switch traffic to green after testing.',
    'What is canary deployment?':
      'Release new version to small group before full rollout.',
    'What is zero-trust security model?':
      'Trust no one by default; verify everything.',
    },
    'Real-world Practices': {
    'Why do companies prefer cloud?':
      'Scalability, cost savings, agility, global reach.',
    'What is vendor lock-in?':
      'Difficulty moving away from one cloud provider.',
    'How to avoid vendor lock-in?':
      'Use multi-cloud, containers, open-source tools.',
    'What is disaster recovery in cloud?':
      'Backup and restore strategy to recover from failures.',
    'What are some real use cases of cloud?':
      'Hosting websites, AI/ML workloads, IoT, big data analytics, SaaS apps.',
    }
  },
  'Cloud Computing (Hands Onn)': {
    '50 Hands-on Cloud Computing Questions & Answers': "",
    'Basics & CLI': {
    'How do you list all S3 buckets in AWS CLI?': 'aws s3 ls',
    'How to upload a file to S3 using CLI?':
      'aws s3 cp myfile.txt s3://my-bucket/',
    'How to create a VM in Azure CLI?':
      'az vm create --resource-group myRG --name myVM --image UbuntuLTS',
    'How to create a GCP VM?':
      'gcloud compute instances create my-vm --zone=us-central1-a',
    'How to check your AWS region via CLI?': 'aws configure get region',
},
    Compute: {
    'Launch an EC2 instance (AWS CLI)?':
      'aws ec2 run-instances --image-id ami-123456 --count 1 --instance-type t2.micro',
    'Stop an EC2 instance (AWS CLI)?':
      'aws ec2 stop-instances --instance-ids i-1234567890abcdef',
    'Resize VM in Azure (CLI)?':
      'az vm resize --resource-group myRG --name myVM --size Standard_B2s',
    'SSH into a GCP VM (CLI)?': 'gcloud compute ssh my-vm --zone=us-central1-a',
    'How to list running instances in AWS?':
      'aws ec2 describe-instances --query "Reservations[*].Instances[*].[InstanceId,State.Name]"',
    },
   Storage: {
    'How to sync local folder to S3 bucket?': 'aws s3 sync ./local-folder s3://my-bucket/',
    'Make S3 bucket public (policy JSON)?': `{
      "Version": "2012-10-17",
      "Statement": [{
        "Effect": "Allow",
        "Principal": "*",
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::my-bucket/*"
      }]
    }`,
    'Create Azure storage account (CLI)?': 'az storage account create -n mystorage123 -g myRG -l eastus --sku Standard_LRS',
    'Upload a file to GCP bucket?': 'gsutil cp file.txt gs://my-bucket/',
    'Mount EFS on EC2 (Linux)?': 'sudo mount -t nfs4 -o nfsvers=4.1 fs-123456.efs.us-east-1.amazonaws.com:/ efs'
  },

  Networking: {
    'Create VPC in AWS (CLI)?': 'aws ec2 create-vpc --cidr-block 10.0.0.0/16',
    'Open port 80 on security group (CLI)?': 'aws ec2 authorize-security-group-ingress --group-id sg-123456 --protocol tcp --port 80 --cidr 0.0.0.0/0',
    'Assign static IP to Azure VM (CLI)?': 'az network public-ip create --name myIP --resource-group myRG --allocation-method Static',
    'Check firewall rules in GCP (CLI)?': 'gcloud compute firewall-rules list',
    'List AWS load balancers?': 'aws elbv2 describe-load-balancers'
  },
   Serverless: {
    'Deploy AWS Lambda via CLI?': `aws lambda create-function \
--function-name myFunction \
--runtime nodejs18.x \
--handler index.handler \
--zip-file fileb://function.zip \
--role arn:aws:iam::123456:role/lambda-role`,

    'Invoke Lambda via CLI?': 'aws lambda invoke --function-name myFunction response.json',

    'Deploy Azure Function (CLI)?':
      'az functionapp create --resource-group myRG --consumption-plan-location eastus --runtime node --functions-version 3 --name myfuncapp --storage-account mystorage123',

    'Deploy GCP Cloud Function (CLI)?':
      'gcloud functions deploy myFunction --runtime nodejs18 --trigger-http --allow-unauthenticated',

    'What’s AWS SAM?': 'A framework to build and deploy serverless apps using YAML templates.'
  },
     Containers: {
    'Run Docker container in AWS ECS (task JSON)?': `{
      "family": "sample-task",
      "containerDefinitions": [{
        "name": "nginx",
        "image": "nginx:latest",
        "memory": 256,
        "cpu": 128,
        "essential": true
      }]
    }`,

    'Push Docker image to AWS ECR?': `aws ecr get-login-password | docker login --username AWS --password-stdin <account>.dkr.ecr.region.amazonaws.com
docker build -t myapp .
docker tag myapp:latest <account>.dkr.ecr.region.amazonaws.com/myapp:latest
docker push <account>.dkr.ecr.region.amazonaws.com/myapp:latest`,

    'Create AKS (Azure Kubernetes Service)?':
      'az aks create --resource-group myRG --name myCluster --node-count 2 --enable-addons monitoring --generate-ssh-keys',

    'Deploy app to GKE (kubectl)?': 'kubectl create deployment myapp --image=nginx',

    'Expose app on GKE?': 'kubectl expose deployment myapp --type=LoadBalancer --port=80'
  },

  'IaC (Infrastructure as Code)': {
    'Terraform AWS EC2 example:': `resource "aws_instance" "example" {
  ami           = "ami-123456"
  instance_type = "t2.micro"
}`,

    'Terraform S3 bucket example:': `resource "aws_s3_bucket" "example" {
  bucket = "my-bucket-123"
  acl    = "private"
}`,

    'CloudFormation EC2 (YAML):': `Resources:
  MyEC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      InstanceType: t2.micro
      ImageId: ami-123456`,

    'Azure ARM template VM (snippet):': `{
  "type": "Microsoft.Compute/virtualMachines",
  "apiVersion": "2021-07-01",
  "name": "myVM",
  "location": "[resourceGroup().location]",
  "properties": {
    "hardwareProfile": { "vmSize": "Standard_B1s" }
  }
}`,

    'GCP Deployment Manager (YAML):': `resources:
  - name: my-vm
    type: compute.v1.instance
    properties:
      zone: us-central1-a
      machineType: n1-standard-1`
  },
    'Monitoring & Logs': {
    'Check AWS CloudWatch logs (CLI)?': 'aws logs describe-log-groups',

    'Stream logs from Lambda to CloudWatch?':
      'Done automatically if the Lambda execution role includes CloudWatch permissions.',

    'Check Azure monitor metrics?':
      'az monitor metrics list --resource <resource-id>',

    'Check GCP logs?': 'gcloud logging read "resource.type=gce_instance"',

    'Install CloudWatch agent on EC2 (Linux)?': `sudo yum install amazon-cloudwatch-agent
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a start`
  },
   Security: {
    'Create IAM user via AWS CLI?': 'aws iam create-user --user-name devuser',

    'Attach policy to IAM user?':
      'aws iam attach-user-policy --user-name devuser --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess',

    'Generate temporary credentials (STS)?':
      'aws sts get-session-token --duration-seconds 3600',

    'Enable MFA for AWS user?':
      'aws iam enable-mfa-device --user-name devuser --serial-number arn:aws:iam::123456:mfa/devuser --authentication-code1 123456 --authentication-code2 654321',

    'Check Azure RBAC role assignments?': 'az role assignment list'
  },
    'Advanced & Real-World': {
    'Blue-Green deployment (Kubernetes)?':
      'Deploy new version as myapp-v2 and switch traffic using Service.',

    'Canary deployment (kubectl)?':
      'kubectl set image deployment/myapp myapp=nginx:1.19 --record',

    'Disaster recovery in AWS?':
      'Use cross-region S3 replication, RDS multi-AZ, Route53 failover.',

    'Encrypt EBS volume?':
      'aws ec2 create-volume --size 8 --region us-east-1 --availability-zone us-east-1a --encrypted',

    'How to check AWS billing (CLI)?':
      'aws ce get-cost-and-usage --time-period Start=2025-09-01,End=2025-09-26 --granularity MONTHLY --metrics "AmortizedCost"'
  },
  },
   Amazon: {
    '☁️ AWS – 50 Hands-on Q&A': {
      S3: {
        'List S3 buckets': 'aws s3 ls',
        'Upload file to S3': 'aws s3 cp file.txt s3://my-bucket/',
        'Sync local folder to S3': 'aws s3 sync ./local s3://my-bucket/',
        'Make S3 bucket public (policy JSON snippet).': 'Set bucket policy via aws s3api put-bucket-policy using public-read ACL.',
        'Enable versioning on a bucket:':
          'aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Enabled'
      },

      EC2: {
        'Launch instance':
          'aws ec2 run-instances --image-id ami-123 --instance-type t2.micro',
        'Stop instance':
          'aws ec2 stop-instances --instance-ids i-123',
        'Start instance':
          'aws ec2 start-instances --instance-ids i-123',
        'Describe instances (ID + state).':
          'aws ec2 describe-instances --query "Reservations[*].Instances[*].[InstanceId,State.Name]" --output table',
        'SSH into EC2 (Linux):':
          'ssh -i key.pem ec2-user@<public-ip>'
      },

      'VPC & Networking': {
        'Create VPC (10.0.0.0/16).':
          'aws ec2 create-vpc --cidr-block 10.0.0.0/16',
        'Create subnet inside VPC.':
          'aws ec2 create-subnet --vpc-id vpc-123 --cidr-block 10.0.1.0/24',
        'Create Internet Gateway.':
          'aws ec2 create-internet-gateway',
        'Attach IGW to VPC.':
          'aws ec2 attach-internet-gateway --vpc-id vpc-123 --internet-gateway-id igw-123',
        'Open port 80 in security group.':
          'aws ec2 authorize-security-group-ingress --group-id sg-123 --protocol tcp --port 80 --cidr 0.0.0.0/0'
      },

      IAM: {
        'Create user:':
          'aws iam create-user --user-name devuser',
        'Attach S3FullAccess policy.':
          'aws iam attach-user-policy --user-name devuser --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess',
        'Create group and add user.':
          'aws iam create-group --group-name devs && aws iam add-user-to-group --user-name devuser --group-name devs',
        'Generate access key.':
          'aws iam create-access-key --user-name devuser',
        'Create IAM role for EC2.':
          'aws iam create-role --role-name EC2Role --assume-role-policy-document file://trust-policy.json'
      },

      Lambda: {
        'Create Lambda from zip file.':
          'aws lambda create-function --function-name my-func --runtime nodejs18.x --role arn:aws:iam::123:role/lambda-role --handler index.handler --zip-file fileb://function.zip',
        'Invoke Lambda.':
          'aws lambda invoke --function-name my-func output.json',
        'Add S3 trigger to Lambda.':
          'aws lambda create-event-source-mapping --function-name my-func --event-source-arn arn:aws:s3:::my-bucket',
        'Update Lambda code.':
          'aws lambda update-function-code --function-name my-func --zip-file fileb://function.zip',
        'Delete Lambda function.':
          'aws lambda delete-function --function-name my-func'
      },

      RDS: {
        'Create MySQL instance.':
          'aws rds create-db-instance --db-instance-identifier mydb --engine mysql --master-username admin --master-user-password pass123 --allocated-storage 20',
        'Modify RDS instance size.':
          'aws rds modify-db-instance --db-instance-identifier mydb --db-instance-class db.t3.medium --apply-immediately',
        'Create DB snapshot.':
          'aws rds create-db-snapshot --db-snapshot-identifier mydb-snap --db-instance-identifier mydb',
        'Restore from snapshot.':
          'aws rds restore-db-instance-from-db-snapshot --db-instance-identifier mydb-restore --db-snapshot-identifier mydb-snap',
        'Enable Multi-AZ.':
          'aws rds modify-db-instance --db-instance-identifier mydb --multi-az --apply-immediately'
      },

      'CloudWatch & Monitoring': {
        'List log groups.': 'aws logs describe-log-groups',
        'View Lambda logs.': 'aws logs get-log-events --log-group-name /aws/lambda/my-func',
        'Create CloudWatch alarm for CPU > 80%.':
          'aws cloudwatch put-metric-alarm --alarm-name HighCPU --metric-name CPUUtilization --namespace AWS/EC2 --statistic Average --threshold 80 --comparison-operator GreaterThanThreshold --dimensions Name=InstanceId,Value=i-123 --period 300 --evaluation-periods 2 --alarm-actions arn:aws:sns:us-east-1:123:alert',
        'Enable EC2 detailed monitoring.':
          'aws ec2 monitor-instances --instance-ids i-123',
        'Publish custom metric.':
          'aws cloudwatch put-metric-data --namespace MyApp --metric-name PageLoadTime --value 3.45'
      },

      'ECR & ECS': {
        'Authenticate Docker to ECR.': 'aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com',
        'Push image to ECR.':
          'docker tag myapp:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/myapp:latest && docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/myapp:latest',
        'Create ECS cluster.':
          'aws ecs create-cluster --cluster-name my-cluster',
        'Register task definition.':
          'aws ecs register-task-definition --family my-task --container-definitions file://task-def.json',
        'Run ECS task.':
          'aws ecs run-task --cluster my-cluster --task-definition my-task'
      },

      Advanced: {
        'Create EKS cluster.':
          'eksctl create cluster --name my-eks --region us-east-1',
        'Deploy app to EKS.':
          'kubectl apply -f deployment.yaml',
        'Create CloudFormation stack (EC2 snippet).':
          'aws cloudformation create-stack --stack-name ec2-stack --template-body file://ec2.yaml',
        'Terraform EC2 snippet.':
          'resource "aws_instance" "example" { ami = "ami-123" instance_type = "t2.micro" }',
        'Configure S3 cross-region replication.':
          'Enable versioning on source/destination buckets and apply replication configuration JSON.',
        'Create CloudFront distribution.':
          'aws cloudfront create-distribution --origin-domain-name my-bucket.s3.amazonaws.com',
        'Enable WAF for CloudFront.':
          'aws wafv2 associate-web-acl --web-acl-arn arn:aws:wafv2:us-east-1:123:regional/webacl/mywaf --resource-arn arn:aws:cloudfront::123:distribution/ABCDEF',
        'Configure Route53 failover.':
          'Create two A records with health checks and failover routing.',
        'Use AWS CLI to check billing.':
          'aws ce get-cost-and-usage --time-period Start=2025-09-01,End=2025-09-26 --granularity MONTHLY --metrics "AmortizedCost"',
        'Enable GuardDuty in AWS region.':
          'aws guardduty create-detector --enable'
      }
    }
}
  ,
Azure: {
  '☁️ Azure – 50 Hands-on Q&A': {
    Storage: {
      'Create storage account.':
        'az storage account create --name mystorage --resource-group myrg --location eastus --sku Standard_LRS',
      'Upload blob to container.':
        'az storage blob upload --account-name mystorage --container-name mycontainer --name file.txt --file ./file.txt',
      'List blobs in container.':
        'az storage blob list --account-name mystorage --container-name mycontainer --output table',
      'Set container public.':
        'az storage container set-permission --account-name mystorage --name mycontainer --public-access blob',
      'Enable soft delete.':
        'az storage blob service-properties delete-policy update --account-name mystorage --enable true --days-retained 7'
    },

    VM: {
      'Create VM (Ubuntu).':
        'az vm create --resource-group myrg --name myvm --image UbuntuLTS --admin-username azureuser --generate-ssh-keys',
      'SSH into VM.':
        'ssh azureuser@<public-ip>',
      'Stop VM.':
        'az vm stop --resource-group myrg --name myvm',
      'Start VM.':
        'az vm start --resource-group myrg --name myvm',
      'Resize VM.':
        'az vm resize --resource-group myrg --name myvm --size Standard_B2s'
    },

    Networking: {
      'Create virtual network.':
        'az network vnet create --resource-group myrg --name myvnet --address-prefix 10.0.0.0/16',
      'Create subnet.':
        'az network vnet subnet create --resource-group myrg --vnet-name myvnet --name mysubnet --address-prefixes 10.0.1.0/24',
      'Create NSG (network security group).':
        'az network nsg create --resource-group myrg --name mynsg',
      'Allow port 80 inbound.':
        'az network nsg rule create --resource-group myrg --nsg-name mynsg --name allow-http --protocol tcp --priority 1000 --destination-port-range 80 --access Allow',
      'Assign static public IP.':
        'az network public-ip create --resource-group myrg --name myip --allocation-method Static'
    },

    'IAM & Security': {
      'List users in tenant.':
        'az ad user list --output table',
      'Assign RBAC role to user.':
        'az role assignment create --assignee <user-email> --role "Contributor" --resource-group myrg',
      'Create service principal.':
        'az ad sp create-for-rbac --name myapp --role Contributor --scopes /subscriptions/<sub-id>/resourceGroups/myrg',
      'Reset SP credentials.':
        'az ad sp credential reset --name myapp',
      'Enable MFA for user.':
        'Configure via Azure AD Conditional Access policy in portal (CLI not supported).'
    },

    Functions: {
      'Create Function App.':
        'az functionapp create --resource-group myrg --consumption-plan-location eastus --name myfuncapp --storage-account mystorage --runtime node',
      'Deploy Node.js function.':
        'func azure functionapp publish myfuncapp',
      'Trigger function via HTTP.':
        'curl https://myfuncapp.azurewebsites.net/api/<function-name>',
      'View logs in Application Insights.':
        'az monitor app-insights query --app myapp --analytics-query "requests | take 10"',
      'Scale function app.':
        'az functionapp plan update --name myplan --resource-group myrg --max-burst 10'
    },

    'SQL & Databases': {
      'Create Azure SQL database.':
        'az sql db create --resource-group myrg --server myserver --name mydb --service-objective S0',
      'Connect via CLI.':
        'az sql db show-connection-string --client sqlcmd --server myserver.database.windows.net --name mydb',
      'Backup database.':
        'Automated backups enabled by default; use point-in-time restore via portal or CLI.',
      'Geo-replicate database.':
        'az sql db replica create --name mydb --partner-server myserver2 --resource-group myrg',
      'Configure firewall rules.':
        'az sql server firewall-rule create --resource-group myrg --server myserver --name AllowMyIP --start-ip-address <IP> --end-ip-address <IP>'
    },

    Containers: {
      'Create ACR (Azure Container Registry).':
        'az acr create --resource-group myrg --name myregistry --sku Basic',
      'Push image to ACR.':
        'az acr login --name myregistry && docker tag myapp myregistry.azurecr.io/myapp:v1 && docker push myregistry.azurecr.io/myapp:v1',
      'Create AKS cluster.':
        'az aks create --resource-group myrg --name myaks --node-count 2 --enable-addons monitoring --generate-ssh-keys',
      'Deploy app to AKS.':
        'kubectl apply -f deployment.yaml',
      'Expose service with LoadBalancer.':
        'kubectl expose deployment myapp --type=LoadBalancer --port=80 --target-port=8080'
    },

    Monitoring: {
      'View VM metrics.':
        'az monitor metrics list --resource <vm-id> --metric CPUPercentage',
      'Set alert for CPU > 80%.':
        'az monitor metrics alert create --name HighCPU --resource-group myrg --scopes <vm-id> --condition "avg Percentage CPU > 80"',
      'Enable diagnostics on VM.':
        'az vm diagnostics set --resource-group myrg --vm-name myvm --settings ./diagnostics.json',
      'List activity logs.':
        'az monitor activity-log list --max-events 5',
      'Enable Azure Monitor for AKS.':
        'az aks enable-addons --addons monitoring --name myaks --resource-group myrg'
    },

    Advanced: {
      'ARM template VM snippet.':
        '{ "resources": [{ "type": "Microsoft.Compute/virtualMachines", "apiVersion": "2021-07-01", "name": "myVM" }] }',
      'Bicep storage account snippet.':
        'resource stg "Microsoft.Storage/storageAccounts@2021-04-01" { name: "mystorage" location: resourceGroup().location kind: "StorageV2" sku: { name: "Standard_LRS" } }',
      'Deploy resource group via template.':
        'az deployment group create --resource-group myrg --template-file template.json',
      'Enable Azure Firewall.':
        'az network firewall create --name myfirewall --resource-group myrg --location eastus',
      'Configure Azure Bastion for secure VM access.':
        'az network bastion create --name mybastion --public-ip-address myip --vnet-name myvnet --resource-group myrg',
      'Enable Azure DDoS Protection.':
        'az network ddos-protection create --name myddos --resource-group myrg --vnets myvnet',
      'Set up CDN profile.':
        'az cdn profile create --resource-group myrg --name mycdn --sku Standard_Microsoft',
      'Create Logic App for automation.':
        'az logic workflow create --resource-group myrg --name mylogic --definition ./logic.json',
      'Enable Key Vault and store secret.':
        'az keyvault create --name myvault --resource-group myrg --location eastus && az keyvault secret set --vault-name myvault --name "dbPassword" --value "myp@ss"',
      'Retrieve secret via CLI.':
        'az keyvault secret show --vault-name myvault --name "dbPassword" --query value -o tsv'
    }
  }
}
,
 Google: {
  'GCP – 50 Hands-on Q&A': {
    Storage: {
      'Create bucket.':
        'gsutil mb -l us-central1 gs://my-bucket/',
      'Upload file to bucket.':
        'gsutil cp ./file.txt gs://my-bucket/',
      'List objects in bucket.':
        'gsutil ls gs://my-bucket/',
      'Make bucket public.':
        'gsutil iam ch allUsers:objectViewer gs://my-bucket/',
      'Enable bucket versioning.':
        'gsutil versioning set on gs://my-bucket/'
    },

    'Compute Engine': {
      'Create VM.':
        'gcloud compute instances create my-vm --zone=us-central1-a --machine-type=e2-micro --image-family=debian-11 --image-project=debian-cloud',
      'SSH into VM.':
        'gcloud compute ssh my-vm --zone=us-central1-a',
      'Stop VM.':
        'gcloud compute instances stop my-vm --zone=us-central1-a',
      'Start VM.':
        'gcloud compute instances start my-vm --zone=us-central1-a',
      'Change machine type.':
        'gcloud compute instances set-machine-type my-vm --machine-type=e2-medium --zone=us-central1-a'
    },

    Networking: {
      'Create VPC network.':
        'gcloud compute networks create my-vpc --subnet-mode=custom',
      'Create subnet.':
        'gcloud compute networks subnets create my-subnet --network=my-vpc --region=us-central1 --range=10.0.1.0/24',
      'Create firewall rule allow port 80.':
        'gcloud compute firewall-rules create allow-http --network=my-vpc --allow=tcp:80',
      'Assign static IP.':
        'gcloud compute addresses create my-ip --region=us-central1',
      'Create load balancer.':
        'gcloud compute forwarding-rules create my-lb --region=us-central1 --ports=80 --target-http-proxy=my-proxy'
    },

    'IAM & Security': {
      'List IAM roles.':
        'gcloud iam roles list',
      'Assign role to user.':
        'gcloud projects add-iam-policy-binding my-project --member="user:<email>" --role="roles/editor"',
      'Create service account.':
        'gcloud iam service-accounts create my-sa --display-name "My Service Account"',
      'Download service account key.':
        'gcloud iam service-accounts keys create key.json --iam-account=my-sa@my-project.iam.gserviceaccount.com',
      'Enable 2FA for user.':
        'Configured via Google Workspace admin (not CLI supported).'
    },

    'Cloud Functions': {
      'Deploy function (Node.js).':
        'gcloud functions deploy myFunction --runtime nodejs18 --trigger-http --allow-unauthenticated',
      'Invoke function (HTTP trigger).':
        'curl https://REGION-PROJECT_ID.cloudfunctions.net/myFunction',
      'Update function code.':
        'gcloud functions deploy myFunction --source=./updated-code',
      'View function logs.':
        'gcloud functions logs read myFunction',
      'Delete function.':
        'gcloud functions delete myFunction'
    },

    Databases: {
      'Create Cloud SQL instance.':
        'gcloud sql instances create mydb --database-version=MYSQL_8_0 --tier=db-f1-micro --region=us-central1',
      'Connect via gcloud SQL proxy.':
        'cloud_sql_proxy -instances=my-project:us-central1:mydb=tcp:3306',
      'Backup Cloud SQL.':
        'gcloud sql backups create --instance=mydb',
      'Restore SQL backup.':
        'gcloud sql backups restore <BACKUP_ID> --restore-instance=mydb',
      'Create Firestore DB.':
        'gcloud firestore databases create --location=us-central'
    },

    'Containers & GKE': {
      'Create GKE cluster.':
        'gcloud container clusters create my-cluster --num-nodes=2 --zone=us-central1-a',
      'Deploy nginx to GKE.':
        'kubectl create deployment nginx --image=nginx',
      'Expose deployment with LoadBalancer.':
        'kubectl expose deployment nginx --port=80 --type=LoadBalancer',
      'Scale deployment replicas=3.':
        'kubectl scale deployment nginx --replicas=3',
      'View pods & services.':
        'kubectl get pods,svc'
    },

    'Monitoring & Logging': {
      'View VM logs.':
        'gcloud logging read "resource.type=gce_instance" --limit 10',
      'Create CPU > 80% alert.':
        'gcloud monitoring policies create --notification-channels=<channel-id> --condition-display-name="High CPU" --condition-threshold-filter="metric.type=\\"compute.googleapis.com/instance/cpu/utilization\\" AND resource.type=\\"gce_instance\\"" --condition-threshold-value=0.8',
      'Enable Stackdriver logging.':
        'Enabled by default for most services; can be configured via "gcloud logging sinks".',
      'Export logs to BigQuery.':
        'gcloud logging sinks create mySink bigquery.googleapis.com/projects/my-project/datasets/myDataset --log-filter="resource.type=gce_instance"',
      'Enable Cloud Monitoring dashboard.':
        'gcloud monitoring dashboards create --config-from-file=dashboard.json'
    },

    Advanced: {
      'Deployment Manager YAML VM snippet.':
        'resources:\n- name: my-vm\n  type: compute.v1.instance\n  properties:\n    zone: us-central1-a\n    machineType: n1-standard-1\n    disks:\n      - boot: true\n        autoDelete: true\n        initializeParams:\n          sourceImage: projects/debian-cloud/global/images/family/debian-11',
      'Terraform GCP bucket snippet.':
        'resource "google_storage_bucket" "bucket" {\n  name = "my-tf-bucket"\n  location = "US"\n}',
      'Create Cloud Run service.':
        'gcloud run deploy my-service --image=gcr.io/my-project/myapp --region=us-central1 --platform=managed --allow-unauthenticated',
      'Deploy Docker image to Cloud Run.':
        'gcloud builds submit --tag gcr.io/my-project/myapp && gcloud run deploy my-service --image gcr.io/my-project/myapp --region=us-central1',
      'Enable Cloud CDN.':
        'gcloud compute backend-buckets create my-bucket --gcs-bucket-name=my-bucket --enable-cdn',
      'Enable Cloud Armor (DDoS).':
        'gcloud compute security-policies create my-policy --description="DDoS protection"',
      'Create Pub/Sub topic.':
        'gcloud pubsub topics create my-topic',
      'Subscribe to Pub/Sub.':
        'gcloud pubsub subscriptions create my-sub --topic=my-topic',
      'Trigger function from Pub/Sub.':
        'gcloud functions deploy myPubSubFunc --runtime nodejs18 --trigger-topic=my-topic',
      'View billing via CLI.':
        'gcloud beta billing accounts list && gcloud beta billing accounts get-iam-policy <account-id>'
    }
},
 },
  'system design': {
  '50 System Design & Architecture Questions & Answers': "",
  Fundamentals: {
  'What is system design?': 'The process of defining architecture, components, modules, and interactions of a system.',
  'What’s the difference between high-level and low-level design?': 'High-level: overall architecture & modules. Low-level: detailed algorithms, data structures, APIs.',
  'What are non-functional requirements (NFRs)?': 'Scalability, availability, performance, security, maintainability.',
  'What is scalability?': 'System’s ability to handle growth in workload.',
  'Difference between horizontal and vertical scaling?': 'Horizontal: add more servers. Vertical: add more power to one server.',
  },
  'Load Handling': {
  'What is load balancing?': 'Distributing traffic across multiple servers to avoid overload.',
  'Popular load balancing algorithms?': 'Round-robin, Least connections, IP hash.',
  'What’s CDN?': 'Content Delivery Network caches content near users for faster response.',
  'What is caching?': 'Temporarily storing data for quick access (Redis, Memcached).',
  'Where can caching be applied?': 'Browser, CDN, database queries, API responses, application level.',
  },
  Databases: {
  'SQL vs NoSQL?': 'SQL = structured, relational. NoSQL = flexible schema, document/key-value/graph.',
  'When to use SQL?': 'Strong consistency, relational data.',
  'When to use NoSQL?': 'Scalability, flexible schema, high throughput.',
  'What is database sharding?': 'Splitting data into smaller chunks (shards) across servers.',
  'What is database replication?': 'Copying data across servers for availability & read scaling.',
  },
  'Availability & Reliability': {
  'What is high availability (HA)?': 'System designed to stay operational with minimal downtime.',
  'What is fault tolerance?': 'System continues working even if components fail.',
  'What is disaster recovery (DR)?': 'Ability to restore system after catastrophic failure.',
  'What is a failover system?': 'Switching to backup resources automatically when primary fails.',
  'What is CAP theorem?': 'In distributed systems, you can only guarantee 2 of 3: Consistency, Availability, Partition Tolerance.',
  },
  'System Components': {
  'What is a message queue?': 'Middleware for async communication (Kafka, RabbitMQ, SQS).',
  'Why use message queues?': 'Decoupling, load leveling, retry handling.',
  'What is event-driven architecture?': 'System components react to events asynchronously.',
  'What is a microservices architecture?': 'Breaking apps into small independent services communicating via APIs.',
  'What is monolithic architecture?': 'Single large application where all components are tightly coupled.',
  },
  'API Design': {
  'Difference between REST and GraphQL?': 'REST: predefined endpoints. GraphQL: client requests exact data shape.',
  'What is gRPC?': 'High-performance RPC protocol using Protocol Buffers.',
  'What is API rate limiting?': 'Restricting requests to protect from abuse & overload.',
  'What’s an API gateway?': 'Entry point for managing APIs (auth, rate-limiting, routing).',
  'Why use service discovery?': 'To dynamically locate microservices (Consul, Eureka).',
  },
  'Design Patterns': {
  'What is CQRS?': 'Command Query Responsibility Segregation – separate read & write models.',
  'What is Event Sourcing?': 'Store state as a sequence of events instead of current snapshot.',
  'What is Saga Pattern?': 'Manage distributed transactions in microservices.',
  'What is Circuit Breaker Pattern?': 'Prevents cascading failures by stopping calls to failing service.',
  'What is Bulkhead Pattern?': 'Isolating failures to prevent full system collapse.',
  },
  'Scalability & Performance': {
  'What is database indexing?': 'Data structure that speeds up queries.',
  'What is denormalization?': 'Adding redundancy to optimize read performance.',
  'What is eventual consistency?': 'Data updates will propagate and become consistent over time.',
  'What is throttling?': 'Controlling the rate of requests to maintain performance.',
  'What is backpressure in systems?': 'Mechanism to slow down request producers when consumers can’t keep up.',
  },
  'Real-World Scenarios': {
  'How would you design a URL shortener (like bit.ly)?': 'Use hash + database with caching, redirect service, high availability.',
  'How to design a chat system (like WhatsApp)?': 'WebSockets, message queues, partitioned databases, offline storage.',
  'How to design a news feed system (like Facebook)?': 'Precompute feeds + caching + ranking algorithms.',
  'How to design a scalable search system (like Google)?': 'Distributed indexing, sharding, inverted index, caching.',
  'How to design an e-commerce system?': 'Microservices for product, cart, payment, orders; caching; async queues.',
  },
  Advanced: {
  'What is eventual vs strong consistency?': 'Eventual: updates propagate with delay. Strong: all clients see latest data immediately.',
  'What is an API Idempotency Key?': 'Ensures repeated requests don’t cause duplicate operations.',
  'What is edge computing in system design?': 'Processing near users/devices to reduce latency.',
  'What is observability in architecture?': 'Ability to measure system health using logs, metrics, traces.',
  'What is zero-downtime deployment?': 'Techniques like blue-green or canary deployments to release without downtime.'
},

   "NetFLix": {
    "Summary": "Requirements → high-level architecture → components & data flows → scaling, storage & CDN → streaming (encoding, ABR, DRM) → personalization & search → ops, monitoring, cost & roadmap (compact, battle-tested).",

    "High level requirements (functional + NFR)": "Browse catalog, VOD playback, user accounts/profiles/watch history/ratings, search, recommendations, watchlists, ABR/resume across devices, ingest/transcode pipeline for content owners, basic social features. NFRs: global low-latency (<1s start), extremely high availability (99.99%+), cost-effective storage/delivery, strong DRM, low-latency personalization, observability & analytics.",

    "High-level architecture (components)": "Client apps (TV, mobile, web, set-top) with playback engine, ABR, DRM, local cache → API gateway/edge services (auth, routing, throttling, token issuance) → CDN edge caches → origin storage (masters + renditions + manifests) → microservices: metadata, user, playback session, token/DRM, recommendations, search → analytics/event pipeline → admin/control plane.",

    "Request / Playback flow (sequence)": "Client authenticates → requests catalog → metadata served (edge/CDN cached) → user selects title → playback session checks entitlement → token/DRM service issues signed manifest URL + license token → client requests manifest from CDN (edge) → client fetches chunks from CDN using ABR → client sends playback events to event collector (Kafka).",

    "Video storage & CDN strategy": "Store master assets in durable object storage (multi-region). Store transcoded renditions as objects with manifest references. Use short segments (2–6s) for ABR/responsiveness. Multi-CDN with geo-routing, long TTL for segments and shorter TTL for manifests. Origins behind load balancers + autoscaling optimized for high-throughput reads. Use signed URLs/policy for access control and versioned cache keys.",

    "Ingest & Transcoding pipeline": "Upload master → validate → store → enqueue transcoding job (Kafka). Transcoding workers (K8s with GPU/CPU autoscale) produce renditions, thumbnails, subtitles. Package into HLS/DASH manifests and segmented chunks. Run automated QC, publish to origin, update metadata.",

    "Adaptive Bitrate (ABR)": "Encode multiple bitrates/resolutions/codecs (AV1/H.265/H.264 per device). Client ABR chooses bitrate by throughput and buffer. Use short segments and small startup manifests for quick start. Use prefetching and local caching to reduce stalls.",

    "DRM & Security": "Use Widevine/PlayReady/FairPlay per platform. License server issues keys after entitlement checks; use signed JWT tokens per session. HTTPS everywhere, signed manifest URLs with short expiry, HttpOnly secure cookies. Token binding and per-session license rate limits to limit leakage. For premium content use forensic watermarking.",

    "Recommendations & Personalization": "Hybrid approach: offline batch (embeddings, similarity) + near-real-time feature updates. Feature store for user features (watch history, prefs). Online model server for low-latency recommendations with reranking and A/B testing. Cold start: popularity + metadata bootstrap.",

    "Search & Metadata": "Use search index (Elastic/OpenSearch) with inverted indices, fuzzy matching, faceted search, prefix indices for autocomplete. Normalize metadata (titles, locales, subtitles, dubbing). Provide suggestions and faceted filters (genre, year, rating).",

    "Data models (simplified)": "User {id, email, profiles[]}; Profile {id, userId, preferences, viewingHistory[], entitlements}; CatalogItem {id, title, description, genres[], metadata, renditions[], versions[]}; Rendition {codec, bitrate, resolution, manifestUrl}; PlaybackEvent {userId, profileId, titleId, eventType, ts, position}.",

    "Analytics & Event pipeline": "Clients emit structured events (clicks, impressions, QoS metrics) → Kafka → stream processors (Flink/Beam) → real-time dashboards + OLAP (BigQuery/Redshift) + data lake for batch analytics. Capture QoS (startup, buffer ratio, dropped frames) for SRE and encoding optimization.",

    "Scaling & Capacity planning (practical notes)": "Use multi-CDN to offload origin (target <1% origin steady-state). Autoscale transcoding workers; use spot/preemptible instances for cost efficiency. Ensure origin & CDN capacity for millions of concurrent streams; prefer regional origins. Tune cache hit ratio via TTL strategy (long for segments, tiered for manifests).",

    "Fault tolerance & high availability": "Multi-region active-active/active-passive for critical services (auth, catalog). Replicated DBs with primary for writes and read replicas. Circuit breakers, retries/backoff, chaos engineering & automated failover runbooks.",

    "Monitoring, SLOs & Observability": "Define SLOs (e.g., startup <2s for 95%, buffering ratio <1% for 99%). Monitor CDN metrics, origin latency, error rates, QoS, transcoding backlog, license server health. Tracing (Jaeger), logs (ELK), metrics (Prometheus/Grafana), and alerts on SLO breaches and QoS regressions.",

    "Cost optimization": "Multi-tier storage: cold for masters, warm for less viewed assets, hot for trending content. Use spot/spot-like instances for encoding. Negotiate multi-CDN egress pricing; cache aggressively at edge. Apply data lifecycle policies for old versions.",

    "Tradeoffs & bottlenecks": "Latency vs cost: more edge caches reduce latency but increase CDN cost. Consistency vs availability: personalization can tolerate eventual consistency; entitlement/billing needs stronger consistency. Encoding breadth vs storage: more renditions improve UX but cost more—use analytics to limit renditions or just-in-time transcoding for rare combos.",

    "Security & Legal considerations": "Store PII encrypted (GDPR/CCPA). Implement geo-blocking and DRM per contracts via edge + entitlement checks. Maintain audit logs for license server and content access.",

    "Roadmap — incremental build plan": "MVP: user auth, catalog, origin storage, CDN for static assets, simple HLS playback with few renditions. Next: ABR tuning, playback session tracking, event pipeline (Kafka), basic analytics. Then: full transcoding pipeline + QC, DRM license server + secure tokens + multi-CDN. Finally: recommendation engine (batch + online), search service, multi-region scaling, observability and cost optimizations.",

    "Quick checklist for interviews (things to mention)": "ABR and chunking strategy, manifest TTLs, multi-CDN & origin scaling, DRM & signed tokens, hybrid recommendation (offline + online) with feature store, event streaming for analytics, fault tolerance & autoscaling encode workers, monitoring & SLOs, key tradeoffs (cost vs latency, consistency vs availability)."
  }
}
}
export default data;
