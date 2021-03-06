# Read more about app configs at http://docs.appgyver.com

module.exports =
  app:
    name: "dashboard_steroids"

  network:
     extraResponseHeaders:
       "Access-Control-Allow-Origin": "*"
       "Access-Control-Allow-Headers": "Content-Type, X-Requested-With"

  webView:
    viewsIgnoreStatusBar: true
    enableDoubleTapToFocus: false
    disableOverscroll: true
    enableViewportScale: false
    enablePopGestureRecognition: true
    allowInlineMediaPlayback: true

  # Applies on iOS only
  statusBar:
    enabled: false
    style: "default"
