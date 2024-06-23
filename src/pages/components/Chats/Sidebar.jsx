import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Sidebar() {
  return (
    <div className="sidebar w-[320px] border-r border-black">
      <Table>
        <TableCaption>End-to-end encrypted.🔒</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead><h1 className="text-black text-xl text-center">Inbox</h1></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='flex items-center gap-4'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              John Doe
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='flex items-center gap-4'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              John Doe
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='flex items-center gap-4'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              John Doe
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='flex items-center gap-4'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              John Doe
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='flex items-center gap-4'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              John Doe
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='flex items-center gap-4'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              John Doe
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='flex items-center gap-4'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              John Doe
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='flex items-center gap-4'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              John Doe
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='flex items-center gap-4'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              John Doe
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
