import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "src/components/shadcn-ui/Default-Ui/dropdown-menu"
import React from 'react'
import { Button } from 'src/components/shadcn-ui/Default-Ui/button'

const DropdownWithRadioCode = () => {
    const [position, setPosition] = React.useState("bottom")
  return (
    <>
    <div className="flex flex-wrap items-center gap-3 mt-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Open Dropdown</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                            <DropdownMenuRadioItem  value="top">Top</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem  value="bottom">Bottom</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem  value="right">Right</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outlinesecondary">Open Dropdown</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                            <DropdownMenuRadioItem  value="top">Top</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem  value="bottom">Bottom</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem  value="right">Right</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outlinewarning">Open Dropdown</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                            <DropdownMenuRadioItem  value="top">Top</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem  value="bottom">Bottom</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem  value="right">Right</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outlineerror">Open Dropdown</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                            <DropdownMenuRadioItem  value="top">Top</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem  value="bottom">Bottom</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem  value="right">Right</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
    </>
  )
}

export default DropdownWithRadioCode