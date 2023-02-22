# Coalition Demo

[Live Demo](https://rainbow-pasca-6665f9.netlify.app/)

[Github Repo](https://github.com/kimfucious/coalition-demo)

## Notes

1.  The logo is missing text on the Hero page in the PDF.
2.  The navbar links are very small on the PDF.
3.  The navbar link, `Team`, does not align with `Climb` in the UI.
4.  The presence of two navbars in the PDF leads me to assume that the Hero is a separate page from History and Team, so I've gone with that assumption.
5.  I don't understand what the `Mountain Tabs` are supposed to do.
6.  When you say, "On mobile," I'm assuming you mean devices of a certain screen width, rather than using device detection. I'll be targeting anything less than 576px as "mobile."
7.  Viewing the PDF in Preview (on a Mac), the background color for the "sticky" nav and climb section is white; however, when viewing in GIMP (I don't have PhotoShop, but I know how to use it) the background is the light powder blue color (hex 61759e). I've gone with white with those, but blue on the footer.
8.  When the screen is < 576px, the Hero page uses a different background image that I customized from the PDF.
9. Guessing at what you want, I've partially implemented the accordion on small screens for the History page only.  This has been done in a separate branch, accordion, and can be previewed [here](https://deploy-preview-1--rainbow-pasca-6665f9.netlify.app/).  This should be considered WIP.
10. I know that if you click the `02.Team` link from the Hero on large screens that it doesn't scroll, or it's off by a few pixels. I haven't figured that out yet.
11. I know that the `02.Climb` header section is wonky. I'm using images, rather than creating a component for both `01.History` and `02.Climb`, which I could do, but didn't.
12. I could not determine the desired behavior for the Carousel, so I just displayed the images, enlarged in a modal. If this were my design, the clicking the thumbnails would change the `01.History` image, but it's not, so you get a modal for now.
