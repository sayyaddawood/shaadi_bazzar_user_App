//
//  AppDelegate.swift
//  ShadiBazaar
//

import Foundation
import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider
import Firebase

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?

  var reactNativeDelegate: ReactNativeDelegate?
  var reactNativeFactory: RCTReactNativeFactory?

  func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
  ) -> Bool {
    
    // 🔥 Firebase
    if FirebaseApp.app() == nil {
      FirebaseApp.configure()
    }

    // Initialize non-optional delegate
    let delegate = ReactNativeDelegate()
    let factory = RCTReactNativeFactory(delegate: delegate)
    delegate.dependencyProvider = RCTAppDependencyProvider()

    // Retain references on AppDelegate properties
    self.reactNativeDelegate = delegate
    self.reactNativeFactory = factory

    window = UIWindow(frame: UIScreen.main.bounds)

    self.reactNativeFactory?.startReactNative(
      withModuleName: "ShadiBazaar",
      in: window,
      launchOptions: launchOptions
    )

    return true
  }
}

// MARK: - React Native Delegate
class ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate {

  override func sourceURL(for bridge: RCTBridge!) -> URL? {
    return self.bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
}
