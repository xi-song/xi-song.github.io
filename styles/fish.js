/*
 * @Description:  
 * @Author: ~��~~
 * @Date: 2024-05-04 22:19:57
 * @LastEditTime: 2024-05-04 22:20:06
 * @LastEditors:  
 */
fish();
function fish() {
    return (
      $("#footer-wrap").css({
        position: "absolute",
        "text-align": "center",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }),
      $("footer").append(
        '<div class="container" id="jsi-flying-fish-container"></div>'
      ),
      $("body").append(
        '<script src="/styles/fish-base.js"></script>'
      ),
      this
    );
  }