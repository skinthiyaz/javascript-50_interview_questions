function greet(name = 'Guest') {
    const hour = new Date().getHours();

    const message = hour < 12 ? 'Good morning' :
        hour < 18 ? 'Good afternoon' :
            'Good evening';
    return `${message}, ${name}!`;

}

console.log(greet('Shaik Inthiyaz')); // Example usage