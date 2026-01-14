/**
 * PoHI Example - Sample Application
 *
 * This is a simple example to demonstrate the PoHI approval workflow.
 * Any changes to this file can be used to test the human approval process.
 */

function greet(name: string): string {
  return `Hello, ${name}! This code was approved by a verified human.`;
}

function main(): void {
  console.log(greet("World"));
  console.log("");
  console.log("PoHI - Proof of Human Intent");
  console.log("AI executes. Humans authorize. Machines verify.");
}

main();
