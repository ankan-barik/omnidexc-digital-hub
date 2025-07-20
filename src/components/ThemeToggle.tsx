
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    console.log('Current theme:', theme)
    if (theme === "light" || theme === "system") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  console.log('ThemeToggle rendered, current theme:', theme)

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="h-12 w-12 rounded-full border-2 shadow-lg bg-background hover:bg-secondary border-border hover:border-primary transition-all duration-300"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
