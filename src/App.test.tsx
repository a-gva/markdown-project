import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('#1: renders text input', () => {
  render(<App />);
  const textarea = screen.getByRole('textbox');
  const input = textarea.textContent;

  expect(input).not.toBe('');
  expect(input).not.toBeNull();
  expect(input).not.toBeUndefined();
});

test('#2: renders markdown output - headings', () => {
  render(<App />);
  const markdown = screen.getByTestId('markdown');
  const output = markdown.innerHTML;

  expect(output).toContain('<h1>Heading h1</h1>');
  expect(output).toContain('<h2>Heading h2</h2>');
  expect(output).toContain('<h3>Heading h3</h3>');
  expect(output).toContain('<h4>Heading h4</h4>');
  expect(output).toContain('<h5>Heading h5</h5>');
  expect(output).toContain('<h6>Heading h6</h6>');
});

test('#3: renders markdown output - emphasis text', () => {
  render(<App />);
  const markdown = screen.getByTestId('markdown');
  const output = markdown.innerHTML;

  expect(output).toContain('<i>This text will be italic</i>');
  expect(output).toContain('<i>This will also be italic</i>');

  expect(output).toContain('<b>This text will be bold</b>');
  expect(output).toContain('<b>This will also be bold</b>');

  expect(output).toContain('<i>You <b>can</b> combine them</i>');
});

test('#4: renders markdown output - images', () => {
  render(<App />);
  const markdown = screen.getByTestId('markdown');
  const output = markdown.innerHTML;

  expect(output).toContain('<img src="https://octodex.github.com/images/minion.png" alt="Minion">');
  expect(output).toContain(
    '<img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat">',
  );
});

test('#5: renders markdown output - links', () => {
  render(<App />);
  const markdown = screen.getByTestId('markdown');
  const output = markdown.innerHTML;

  expect(output).toContain('<a href="https://github.com/">GitHub</a>');
});

test('#6: renders markdown output - blockquotes', () => {
  render(<App />);
  const markdown = screen.getByTestId('markdown');
  const output = markdown.innerHTML;

  expect(output).toContain(
    '<blockquote>Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.</blockquote>',
  );
});

test('#7: renders markdown output - regular text with p tags', () => {
  render(<App />);
  const markdown = screen.getByTestId('markdown');
  const output = markdown.innerHTML;

  expect(output).toContain(
    `<p>When text is separated by an empty new line, it get's rendered into a new block. We use p tags for blocks.<br></p>`,
  );
});
