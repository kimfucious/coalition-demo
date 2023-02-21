# Coalition Demo

## Notes

1.  The logo is missing text on the Hero page in the PDF.
2.  The navbar links are very small on the PDF.
3.  The navbar link, `Team`, does not align with `Climb`.
4.  The presence of two navbars in the PDF leads me to assume that the Hero is a separate page from History and Team, so I've gone with that assumption.
5.  I don't understand what the `Mountain Tabs` are supposed to do.
6.  When you say, "On mobile," I'm assuming you mean devices of a certain screen width, rather than using device detection. I'll be targeting anything less than 576px as "mobile."
7.  Viewing the PDF in Preview (on a Mac), the background color for the "sticky" nav and climb section is white; however, when viewing in GIMP (I don't have PhotoShop, but I know how to use it) the background is the light powder blue color (hex 61759e). I've gone with white with those, but blue on the footer.
8.  When the screen is < 576px, the Hero page uses a different background image that I customized from the PDF.
9.  I do not understand where to use an accordion. I'm using smooth scroll to navigate on the `0.1 History` and `02. Team` links. As such, History and Climb is messed up at anything below 487px. With more clarification and time, I could make these better like the Hero.
10. I know that the `02.Climb` header section is wonky. I'm using images, rather than creating a component for both `01.History` and `02.climb`.
11. I could not determine the desired behavior for the Carousel, so I just displayed the images, enlarged in a modal. If this were my design, the clicking the thumbnails would change the `01.History` image.
