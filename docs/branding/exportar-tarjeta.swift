// Exporta compartir-lahl.html a PNG de 1200 × 630 con WebKit (sin instalar nada).
// Uso: swift docs/branding/exportar-tarjeta.swift <entrada.html> <salida.png>
import AppKit
import WebKit

let args = CommandLine.arguments
let entrada = URL(fileURLWithPath: args[1])
let salida = URL(fileURLWithPath: args[2])
let raiz = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)

final class Exportador: NSObject, WKNavigationDelegate {
  func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
    DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
      let config = WKSnapshotConfiguration()
      config.rect = CGRect(x: 0, y: 0, width: 1200, height: 630)
      config.snapshotWidth = 1200
      webView.takeSnapshot(with: config) { imagen, error in
        guard let imagen, let tiff = imagen.tiffRepresentation,
          let rep = NSBitmapImageRep(data: tiff),
          let png = rep.representation(using: .png, properties: [:])
        else {
          print("No se pudo exportar: \(String(describing: error))")
          exit(1)
        }
        try! png.write(to: salida)
        print("Exportado \(rep.pixelsWide)x\(rep.pixelsHigh)")
        exit(0)
      }
    }
  }
}

let app = NSApplication.shared
app.setActivationPolicy(.prohibited)
let vista = WKWebView(frame: CGRect(x: 0, y: 0, width: 1200, height: 630))
let ventana = NSWindow(contentRect: vista.frame, styleMask: .borderless, backing: .buffered, defer: false)
ventana.contentView = vista
let exportador = Exportador()
vista.navigationDelegate = exportador
vista.loadFileURL(entrada, allowingReadAccessTo: raiz)
app.run()
