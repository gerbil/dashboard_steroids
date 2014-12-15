# Read more about app structure at http://docs.appgyver.com

module.exports =

  rootView:
    location: "alarms#serverList"

  drawers:
    left:
      id: "leftDrawer"
      location: "alarms#drawer"
      showOnAppLoad: false
    options:
      animation: "swingingDoor"

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

# preloads: [
#   {
#     id: "learn-more"
#     location: "example#learn-more"
#   }
#   {
#    id: "using-the-scanner"
#    location: "example#using-the-scanner"
#  }
#]


#
# initialView:
#   id: "initialView"
#   location: "example#initial-view"
