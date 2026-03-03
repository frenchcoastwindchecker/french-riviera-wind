# French Riviera Wind Checker - PWA

A Progressive Web App (PWA) for checking real-time wind conditions on beaches along the French Riviera from Nice to Port Saint Louis.

## 🌟 Features

- ✅ **105 Beaches Monitored** - Comprehensive coverage from Nice to Port Saint Louis
- ✅ **Real-time Data** - Live wind measurements from OpenWeatherMap
- ✅ **Mobile-Responsive** - Beautiful design that works on all devices
- ✅ **Installable** - Can be installed on Android/iOS home screen like a native app
- ✅ **Offline Capable** - Works offline after first visit
- ✅ **Fast & Lightweight** - No app store required
- ✅ **Automatic API Key** - Pre-configured, no setup needed

## 📱 How to Use

### Option 1: Use Online (Easiest)

1. **Host the files** on any web server
2. **Open in browser** on any device
3. **Enter wind speed threshold** (e.g., 15 knots)
4. **Click "Check Wind Conditions"**
5. **View results** sorted geographically (East to West)

### Option 2: Install as App

**On Android:**
1. Open the website in Chrome
2. Tap the menu (⋮) → "Install app" or "Add to Home screen"
3. The app icon will appear on your home screen
4. Launch like any other app!

**On iOS:**
1. Open the website in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. The app icon will appear on your home screen

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free & Easy)

1. **Create a GitHub repository**
2. **Upload all PWA files** to the repository
3. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: main → /root
   - Save
4. **Access your app** at: `https://yourusername.github.io/repository-name/`

### Option 2: Netlify (Free)

1. **Sign up** at [netlify.com](https://netlify.com)
2. **Drag and drop** the `pwa` folder
3. **Get instant URL** - Your app is live!
4. **Optional:** Configure custom domain

### Option 3: Vercel (Free)

1. **Sign up** at [vercel.com](https://vercel.com)
2. **Import** your GitHub repository or upload files
3. **Deploy** - Automatic deployment
4. **Get URL** - Your app is live!

### Option 4: Any Web Server

Upload all files to any web hosting service:
- Traditional web hosting (cPanel, etc.)
- Cloud storage (AWS S3, Google Cloud Storage)
- Your own server

**Requirements:**
- HTTPS (required for PWA features)
- All files in same directory

## 📁 File Structure

```
pwa/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── app.js              # JavaScript logic and API calls
├── manifest.json       # PWA configuration
├── service-worker.js   # Offline capability
└── README.md           # This file
```

## 🔧 Configuration

### Changing the API Key

If you need to use a different OpenWeatherMap API key:

1. Open `app.js`
2. Find line: `const DEFAULT_API_KEY = 'fdd2809faa3f4782c85628e2eec7948b';`
3. Replace with your API key
4. Save and redeploy

### Customizing Beach List

To add/remove beaches:

1. Open `app.js`
2. Find the `BEACH_STATIONS` array
3. Add/remove beach objects with format:
   ```javascript
   {"name": "Beach Name", "lat": 43.xxxx, "lon": 7.xxxx}
   ```
4. Save and redeploy

### Changing Appearance

Edit `style.css` to customize:
- Colors (see `:root` variables)
- Fonts
- Layout
- Animations

## 🌐 Browser Compatibility

**Fully Supported:**
- Chrome/Edge (Android & Desktop)
- Safari (iOS & macOS)
- Firefox (Android & Desktop)
- Samsung Internet

**Minimum Requirements:**
- Modern browser with JavaScript enabled
- Internet connection for first visit
- HTTPS for PWA features

## 📊 Technical Details

### API Usage

- **Provider:** OpenWeatherMap
- **Endpoint:** Current Weather Data API
- **Rate Limit:** 60 calls/minute (free tier)
- **Delay:** 100ms between requests to avoid rate limiting

### Performance

- **Initial Load:** ~50KB (HTML + CSS + JS)
- **Cached:** Works offline after first visit
- **Scan Time:** ~10-15 seconds for all 105 beaches
- **Data Freshness:** Real-time (updated every API call)

### Privacy

- No user data collected
- No cookies used
- No analytics tracking
- API calls go directly to OpenWeatherMap

## 🐛 Troubleshooting

### App Won't Install

- Ensure you're using HTTPS
- Try a different browser
- Clear browser cache
- Check if PWA is already installed

### No Wind Data Showing

- Check internet connection
- Verify API key is valid
- Check browser console for errors
- Try lowering wind speed threshold

### Slow Loading

- Normal for first scan (105 beaches)
- Subsequent scans use cached data
- Check internet speed
- Consider reducing beach list

## 🔄 Updates

To update the app after deployment:

1. **Modify files** as needed
2. **Update version** in `service-worker.js`:
   ```javascript
   const CACHE_NAME = 'french-riviera-wind-v2'; // Increment version
   ```
3. **Redeploy** files
4. **Users** will get update on next visit

## 📱 Screenshots

The app features:
- Clean, modern interface
- Real-time wind speed display
- Wind direction indicators
- Timestamp for each measurement
- Source attribution
- Responsive design for all screen sizes

## 🤝 Contributing

To improve the app:

1. Fork the repository
2. Make your changes
3. Test thoroughly
4. Submit pull request

## 📄 License

This project is open source and available for personal and educational use.

## 🙏 Credits

- **Weather Data:** OpenWeatherMap API
- **Icons:** Emoji (built-in)
- **Design:** Custom CSS with modern best practices

## 📞 Support

For issues or questions:
- Check this README
- Review browser console for errors
- Verify API key is working
- Test with different wind thresholds

## 🎯 Future Enhancements

Potential improvements:
- Historical wind data
- Wind forecast (next 24-48 hours)
- Favorite beaches
- Push notifications for wind alerts
- Weather maps integration
- Multiple language support

---

**Enjoy checking wind conditions on the French Riviera! 🌊🌬️**