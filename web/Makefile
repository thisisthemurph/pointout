install-tw:
	curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/download/v3.3.3/tailwindcss-linux-x64
	chmod +x tailwindcss-linux-x64
	mv tailwindcss-linux-x64 tailwindcss

tww:
	./tailwindcss -i ./styles/tailwind.css -o ./styles/app.css --watch

run:
	python3 -m http.server 3000