export const MOCK_QUESTIONS = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    text: i === 0 
        ? "A projectile is fired at an angle of <span class='text-[#514CF1] font-bold'>45º</span> with an initial velocity of <span class='text-[#514CF1] font-bold'>50 m/s</span>. Calculate the maximum height reached by the projectile. Assume standard gravity <span class='text-[#514CF1] font-bold italic'>g = 9.8 m/s²</span>"
        : `Question ${i + 1}: Solve the following advanced calculus problem relating to derivatives and integrals for function f(x) = x^${(i % 5) + 2} + ${i * 3}x. Find the local maxima.`,
    options: ["63.77 m", "75.50 m", "58.20 m", "102.1 m"].map(opt => i === 0 ? opt : `${(i * 10) + Math.floor(Math.random() * 50)}.${Math.floor(Math.random() * 99)} units`),
    points: 5.0,
    status: 'unattempted' as 'current' | 'attempted' | 'review' | 'unattempted',
    selectedOption: null as number | null
}));
