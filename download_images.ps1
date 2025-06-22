# סקריפט להורדת התמונות לפרויקט VIPO Catalogs Hub

# מיקום התמונות בגיטהאב והשמות המקומיים
$imagesList = @(
    @{
        "source" = "https://raw.githubusercontent.com/vipocatalog/digitali/refs/heads/main/images/page_1.webp"
        "destination" = "images\thumbnails\furniture.webp"
    },
    @{
        "source" = "https://raw.githubusercontent.com/vipocatalog/digitali/refs/heads/main/images/page_2.webp"
        "destination" = "images\thumbnails\luxury-sofas-1.webp"
    },
    @{
        "source" = "https://raw.githubusercontent.com/vipocatalog/digitali/refs/heads/main/images/page_3.webp"
        "destination" = "images\thumbnails\luxury-sofas-2.webp"
    },
    @{
        "source" = "https://raw.githubusercontent.com/vipocatalog/digitali/refs/heads/main/images/page_4.webp"
        "destination" = "images\thumbnails\luxury-sofas-3.webp"
    },
    @{
        "source" = "https://raw.githubusercontent.com/vipocatalog/digitali/refs/heads/main/images/page_5.webp"
        "destination" = "images\thumbnails\massage-chairs.webp"
    },
    @{
        "source" = "https://raw.githubusercontent.com/vipocatalog/digitali/refs/heads/main/images/page_6.webp"
        "destination" = "images\thumbnails\massage-chairs-payment.webp"
    },
    @{
        "source" = "https://raw.githubusercontent.com/vipocatalog/digitali/refs/heads/main/images/page_7.webp"
        "destination" = "images\thumbnails\electric-surfboard.webp"
    },
    @{
        "source" = "https://raw.githubusercontent.com/vipocatalog/digitali/refs/heads/main/images/page_8.webp"
        "destination" = "images\thumbnails\snooker-table.webp"
    },
    @{
        "source" = "https://raw.githubusercontent.com/vipocatalog/digitali/refs/heads/main/images/page_9.webp"
        "destination" = "images\thumbnails\camping-gear.webp"
    },
    @{
        "source" = "https://raw.githubusercontent.com/vipocatalog/digitali/refs/heads/main/images/page_10.webp"
        "destination" = "images\thumbnails\tents.webp"
    },
    @{
        "source" = "https://raw.githubusercontent.com/vipocatalog/digitali/refs/heads/main/images/page_11.webp"
        "destination" = "images\thumbnails\food-packages.webp"
    },
    @{
        "source" = "https://raw.githubusercontent.com/vipocatalog/digitali/refs/heads/main/images/page_12.webp"
        "destination" = "images\thumbnails\inflatable-factory.webp"
    },
    @{
        "source" = "https://raw.githubusercontent.com/vipocatalog/digitali/refs/heads/main/images/page_13.webp"
        "destination" = "images\thumbnails\inflatable-mattress.webp"
    },
    @{
        "source" = "https://raw.githubusercontent.com/vipocatalog/digitali/refs/heads/main/images/page_14.webp"
        "destination" = "images\thumbnails\inflatable-tent.webp"
    },
    @{
        "source" = "https://raw.githubusercontent.com/vipocatalog/digitali/refs/heads/main/images/page_15.webp"
        "destination" = "images\logo.webp"
    }
)

# הורדת כל התמונות וסידורן בתיקיות המתאימות
foreach ($image in $imagesList) {
    Write-Host "Downloading $($image.source) to $($image.destination)"
    try {
        Invoke-WebRequest -Uri $image.source -OutFile $image.destination -ErrorAction Stop
        Write-Host "  Success!" -ForegroundColor Green
    } catch {
        Write-Host "  Failed: $_" -ForegroundColor Red
    }
}

Write-Host "`nAll images have been downloaded successfully!" -ForegroundColor Cyan
