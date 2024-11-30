npx create-next-app@latest
npm i clsx tailwind-merge   --lib/utils
npm i tailwindcss-animate   --tailwind.config.ts

new:

        * reusable from input
        --legacy-peer-deps   vs --force
             When to Use Which
Scenario	                                        Recommendation
Peer dependency conflicts only	                    Use --legacy-peer-deps
Critical installation and conflicts persist	        Use --force (last resort)
Safe package resolution while ignoring conflicts	Use --legacy-peer-deps
Absolutely need the package, no matter the risks	Use --force