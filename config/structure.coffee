# Read more about app structure at http://docs.appgyver.com

module.exports =

  rootView:
    location: "login#login"

  drawers:
    left:
      id: "menu"
      location: "menu#menu"
      showOnAppLoad: false
    options:
      animation: "swingingDoor"
    right:
      id: "settings"
      location: "settings#settings"
      showOnAppLoad: false

# See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
#  tabs: [
#    {
#      title: "Alarms"
#      id: "alarms"
#      location: "alarms#index" # Supersonic module#view type navigation
#    },
#    {
#      title: "Index"
#      id: "index"
#     location: "superhero#index" # Supersonic module#view type navigation
#   }
# ]

  preloads: [
    {
      id: "serverList"
      location: "alarms#serverList"
    }
  ]


#
# initialView:
#   id: "initialView"
#   location: "example#initial-view"
