<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Jura:wght@400;600;700&family=Raleway:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,300;1,400;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,400;1,300;1,400;1,700&display=swap"
      rel="stylesheet"
    />
    <link href="dist/output.css" rel="stylesheet" />
    <title>Le MOI sans IA</title>
</head>
    <body>
        <main class="bg-grey w-100 h-auto font-primary">
            <nav role="navigation">
                <?php include_once 'view/nav.html'; ?>
            </nav>
            <section id="intro">
                <?php include_once 'view/intro.html'; ?>
            </section>
            <section id="banner">
                <?php include_once 'view/scrolling-banner.html'; ?>
            </section>
            <section id="us">
                <?php include_once 'view/us.html'; ?>
            </section>
            <section id="risks">
                <?php include_once 'view/risks.html'; ?>
            </section>
            <section id="actu">
                <?php include_once 'view/actu.html'; ?>
            </section>
            <section id="video-top">
                <?php include_once 'view/video-top.html'; ?>
            </section>
            <section id="banner-color">
                <?php include_once 'view/banner-color.html'; ?>
            </section>
            <section id="video">
                <?php include_once 'view/video.html'; ?>
            </section>
            <section id="astuces">
                <?php include_once 'view/astuces.html'; ?>
            </section>
            <section id="scrolling banner">
                <?php include_once 'view/scrolling-banner-before-contact.html'; ?>
            </section>
            <section id="contact">
                <?php include_once 'view/contact.html'; ?>
            </section>
            <footer id="footer" class="bg-black">
                <?php include_once 'view/footer1.html'; ?>
            </footer>
        </main>
        <script src="js/script.js" defer></script>
    </body>
</html>