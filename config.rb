http_path = "portfolio"
css_dir = "css"
sass_dir = "sass"
images_dir = "img"
javascripts_dir = "js"
fonts_dir = "css"
generated_images_dir = "img"
http_images_path = http_path + "/" + generated_images_dir
http_generated_images_path = http_images_path
output_style = (environment == :production) ? :compressed : :expanded