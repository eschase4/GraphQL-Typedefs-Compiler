const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const code = fs.readFileSync('test.js', 'utf-8');

const ast = parser.parse(code, {
    sourceType: 'module', // Can be 'module' or 'script'
    plugins: ['jsx'] // Add more plugins if necessary, e.g., 'typescript'
});

// Now 'ast' contains the Abstract Syntax Tree of your JavaScript code.

// You can traverse the AST to extract information or perform operations.
traverse(ast, {
    FunctionDeclaration(path) {
        console.log('Function name:', path.node.id.name);
    },
    VariableDeclaration(path) {
        console.log('Variable name:', path.node.declarations[0].id.name);
    }
})